---
layout: layouts/home
title: 安田祐平
posts:
	-
		title: 「JavaScript sprinkles in Basecamp turned Stimulus」の雑要約
		url: /20201103-javascript-sprinkles-in-basecamp-turned-stimulus
		description: Basecampで従来記述されていたJavaScriptのパターンを抽出しつつ良いパターンに導けるように、HTMLに直接属性を記述することで振る舞いを登録するStimulusというライブラリを作った話。またなぜReactのような「モダン」なアプローチを採用しないのか。

	-
		title: Tailwind CSSの設計思想を業務に活かす
		url: https://www.codegrid.net/series/2020-tailwind-talk
		description: Tailwind CSSにまつわる座談会。
		provider: CodeGrid

	-
		title: UIにおける見えるけど利用できない非活性な領域の実装とinert属性について
		url: https://standard.shiftbrain.com/blog/unavailable-inert-regions-and-inert-attribute
		description: UIの意図としては利用できないはずの部分が、正しく本当に利用できない状態に実装されていることは実は少ない。ではどのようにすれば確実に利用できない状態を作り出せるか。
		provider: シフトブレイン／スタンダードデザインユニット

	-
		title: 次世代インラインスタイル
		url: https://yuheiy.hatenablog.com/entry/2020/06/22/200616
		description: ユーティリティファーストCSSは実質的にインラインスタイルと言えるが、インラインスタイルには機能的な制約がある。それを乗り越えてインラインスタイルライクな実装をしていくための工夫など。
		provider: yuhei blog

	-
		title: 翻訳：CSSユーティリティクラスと「関心の分離」（いかにしてユーティリティファーストにたどり着いたか）
		url: https://yuheiy.hatenablog.com/entry/2020/05/25/021342
		description: クラス名はどのように命名すればいいのか。コンテンツに依存する名前をつけると再利用性がなくなってしまうので、少しずつ名前を抽象化していく必要があるが、その繰り返しには際限がなくひたすら労力がかかる。ではどうすればこの抽象化を上手く行っていけるか。
		provider: yuhei blog

	-
		title: 実践的レイアウトプリミティブ
		url: https://yuheiy.hatenablog.com/entry/2020/05/18/094715
		description: レイアウトプリミティブはその高い汎用性をもって現実のプロジェクトにおける実装の総量や個別性を抑制する。実用性に主眼を置き、見いだされてきた具体的な設計手法の解説。
		provider: yuhei blog

	-
		title: CSSにおける汎用化の先送り、ユーティリティファーストCSS、レイアウトプリミティブ
		url: https://yuheiy.hatenablog.com/entry/2020/05/06/213311
		description: CSSの汎用化は、それが汎用的であると本当に判明したタイミングになってから行われるべきだ。ではいかにすればうまくそれを実現できるのか、いくつかのアプローチと照らし合わせながら考察する。
		provider: yuhei blog

	-
		title: 翻訳：Rich Harris「形而上学とJavaScript」に関する見解（ReactによるDOMの抽象化の不完全性について）
		url: https://yuheiy.hatenablog.com/entry/2020/01/25/230154
		description: Reactはその宣言的なアプローチを成立させるために、本来の命令的なDOMとの間で膨大な橋渡しを行っている。これは設計として無理があるだけではなく、ユーザーである開発者のメンタルモデルにも歪みを生じさせてしまう。
		provider: yuhei blog

	-
		title: レイアウトプリミティブ
		url: https://standard.shiftbrain.com/blog/layout-primitives
		description: コンポーネント単体では目に見えないが、ほかと組み合わせることで意味のあるレイアウトができるというパターンがある。それらをレイアウトプリミティブと呼び、再利用性を高めるためのルールを紹介。
		provider: シフトブレイン／スタンダードデザインユニット

	-
		title: 「代替」の意味を探して
		url: https://yuheiy.github.io/meanings-of-the-alternative/
		description: HTMLにおける「代替」とは何なのか。代替テキスト・アクセシビリティツリー・文書構造とプレゼンテーションの分離などについて。
		provider: yuheiy.github.io

	-
		title: レスポンシブデザインに見るデザインカンプと実装との溝
		url: https://standard.shiftbrain.com/blog/the-gap-between-design-and-implementation-in-responsive-design
		description: 自作ツールの紹介を通して、デザインカンプと実装の関係性・グリッドシステム・レスポンシブデザインの意味などを考察。
		provider: シフトブレイン／スタンダードデザインユニット

	-
		title: 制作者のためのHTML
		url: https://yuheiy.github.io/html-for-creators/
		description: HTMLはアクセシビリティやSEOの文脈において、「ユーザーにとって」重要であるという語られ方をする。しかし視点を変えれば、制作者はHTMLをよいデザインを行うための思考のフレームワークとして利用できる。
		provider: yuheiy.github.io

	-
		title: ユーザー自身の道具になるためのインターフェイス
		url: https://yuheiy.github.io/interface-to-become-your-own-tool/
		description: 「モーダル」なデザインはユーザーの創造性を制限する。すると提供側がユーザーの行動を主導する形になり、使いにくく感じられる道具ができてしまう。
		provider: yuheiy.github.io

	-
		title: ページ内リンクの実装から考える、a要素のclickイベントとその振る舞い
		url: https://standard.shiftbrain.com/blog/default-action-for-click-event-of-a-element
		description: ページになにかしらの機能を実装するとき、開発者はブラウザがもともと備えている挙動を取り消して独自の実装で上書きしてしまう場合がある。大抵はその挙動を代替する実装を行うが、もしかしたらそれは見えている仕様の一部だけを表面的に模写したもので、開発者は重要な挙動の存在を見落としてユーザーに不利益を与えてしまっているかもしれない。
		provider: シフトブレイン／スタンダードデザインユニット

projects:
	-
		title: accrefs
		url: https://accrefs.jp/
		description: ウェブアクセシビリティの参考資料をまとめたサイト。日本語の資料を中心にリンク数は200を超える。サイトのデザインおよび実装に携わる。有志のメンバーにより制作・運営されている。

	-
		title: yuhei blog
		url: https://yuheiy.hatenablog.com/
		description: 過去に更新していた個人ブログ。更新終了済み。

	-
		title: シフトブレイン／スタンダードデザインユニット
		url: https://standard.shiftbrain.com/
		description: 自社で所属していたチームのウェブサイト。更新終了済み。
---

{{ metadata.description }}

好きな仕様書は[ARIA in HTML](https://www.w3.org/TR/html-aria/)、好きなCSSセレクタは[要素型セレクタ](https://developer.mozilla.org/ja/docs/Web/CSS/Type_selectors)。[Eleventy](https://www.11ty.dev/)・[Svelte](https://svelte.dev/)・[CUBE CSS](https://piccalil.li/cube-css/)のファン。[Every Layout](https://every-layout.dev/)の[監訳作業中](https://twitter.com/orange_juno/status/1230676123802988545)。
