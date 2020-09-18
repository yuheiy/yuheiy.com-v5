const fs = require("fs");
const { execFile } = require("child_process");
const { promisify } = require("util");
const { DateTime } = require("luxon");
const fg = require("fast-glob");
const matter = require("gray-matter");

const TIMEZONE = "Asia/Tokyo";

// nowと実際にコミットした時間との差分をどこまで見込むか
// ファイルに最終コミットした日付とfrontmatterのupdatedを比較して、実際にupdatedを書き換えるかどうかの分岐を行っているが、
// 当スクリプト実行時の時間をfrontmatterに埋め込んでおり、その後に実行されるコミットの時間とはわずかにズレが生まれてしまうため、
// その差分を無視するためにコミット実行時間から巻き戻した時間を利用して比較する。
const EXPECTED_EXECUTION_TIME_OF_THIS_SCRIPT = 1000;

const execFileAsync = promisify(execFile);

const readLastCommitDate = async (filePath) => {
	return (
		await execFileAsync("git", ["log", "-1", "--pretty=format:%cI", filePath])
	).stdout;
};

const main = async () => {
	const now = DateTime.local();

	(await fg("src/posts/*.md")).forEach(async (filePath) => {
		const file = matter(await fs.promises.readFile(filePath));

		if (file.data.published) {
			const updated = DateTime.fromISO(
				file.data.updated || file.data.published
			);
			const lastCommitted = DateTime.fromISO(
				await readLastCommitDate(filePath)
			);
			const lastRewritten = lastCommitted.minus(
				EXPECTED_EXECUTION_TIME_OF_THIS_SCRIPT
			);
			const hasRewrittenSinceLastChange =
				updated.diff(lastRewritten).valueOf() >= 0;
			if (hasRewrittenSinceLastChange) {
				return;
			}
			file.data.updated = now.setZone(TIMEZONE).toISO();
		} else {
			file.data.published = now.setZone(TIMEZONE).toISO();
		}

		await fs.promises.writeFile(filePath, matter.stringify(file));
	});
};

main();
