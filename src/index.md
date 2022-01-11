---
layout: layouts/home
permalink: "{{page.filePathStem}}.html"
isHome: true

posts:
    - title: 『Every Layout』に到った背景と思想についての私の解釈
      link: https://note.com/shiftbrain/n/n0a01726673e0
      description: CSSにおいてこれまでどのような流れがあって『Every Layout』が提唱されるに到ったのか。私なりの解釈を交えた解説。
      provider: SHIFTBRAIN note

    - title: 「Every Layout」をめぐる座談会
      link: https://www.codegrid.net/series/2021-talk-about-every-layout
      description: Every Layoutにまつわる座談会。
      provider: CodeGrid

    - title: 『Every Layout─モジュラーなレスポンシブデザインを実現するCSS設計論』、素直さという選択 &#35;everylayout-ja
      link: /20211011-publication-of-everylayout.html
      description: 監訳を担当した書籍についての紹介。

    - title: 垂直方向のマージンにはmargin-topを優先的に使う理由
      link: /20210127-prefer-margin-top.html
      description: margin-bottomよりもmargin-topのほうが優れていると言えるいくつかの理由の紹介。

    - title: 「JavaScript sprinkles in Basecamp turned Stimulus」の雑要約
      link: /20201103-javascript-sprinkles-in-basecamp-turned-stimulus.html
      description: Basecampで従来記述されていたJavaScriptにまつわるパターンを抽出し、それに則ったよい設計を促すために、HTMLに直接属性を記述することで振る舞いを登録するStimulusというライブラリを作った話。あるいは、なぜReactのような「モダン」なアプローチを採用しないのか。

    - title: Tailwind CSSの設計思想を業務に活かす
      link: https://www.codegrid.net/series/2020-tailwind-talk
      description: Tailwind CSSにまつわる座談会。
      provider: CodeGrid

    - title: UIにおける見えるけど利用できない非活性な領域の実装とinert属性について
      link: https://standard.shiftbrain.com/blog/unavailable-inert-regions-and-inert-attribute
      description: UIにおいて利用できないことを意図している領域を、確実に利用できないように実装するには、いくつも考慮すべき点がある。inert属性を利用することで、それを簡単に行うことができる。
      provider: シフトブレイン／スタンダードデザインユニット

    - title: CSSのユーティリティクラスと「関心の分離」――いかにしてユーティリティファーストにたどり着いたか（翻訳）
      link: https://yuheiy.hatenablog.com/entry/2020/05/25/021342
      description: CSSの書き方について、これまで著者がどのようなアプローチを試みてきて、どのように考察したか。そして、なぜ最終的にユーティリティファーストにたどり着いたかという詳細な解説。
      provider: yuhei blog

    - title: 翻訳：Rich Harris「形而上学とJavaScript」に関する見解（ReactによるDOMの抽象化の不完全性について）
      link: https://yuheiy.hatenablog.com/entry/2020/01/25/230154
      description: Reactはその宣言的なアプローチを成立させるために、本来の命令的なDOMとの間で膨大な橋渡しを行っている。これは設計として無理があるだけではなく、ユーザーである開発者のメンタルモデルにも歪みを生じさせてしまう。
      provider: yuhei blog

    - title: 「代替」の意味を探して
      link: https://yuheiy.github.io/meanings-of-the-alternative/
      description: HTMLにおける「代替」とは何なのか。代替テキスト・アクセシビリティツリー・文書構造とプレゼンテーションの分離などについて。
      provider: yuheiy.github.io

    - title: 制作者のためのHTML
      link: https://yuheiy.github.io/html-for-creators/
      description: HTMLはアクセシビリティやSEOの文脈において、「ユーザーにとって」重要であるという語られ方をする。しかし視点を変えれば、制作者はHTMLをよいデザインを行うための思考のフレームワークとして利用できる。
      provider: yuheiy.github.io

    - title: ユーザー自身の道具になるためのインターフェイス
      link: https://yuheiy.github.io/interface-to-become-your-own-tool/
      description: モーダルなデザインはユーザーの創造性を制限する。提供側がユーザーの行動を主導する形になり、道具として使いにくいものができてしまう。
      provider: yuheiy.github.io

    - title: ページ内リンクの実装から考える、a要素のclickイベントとその振る舞い
      link: https://standard.shiftbrain.com/blog/default-action-for-click-event-of-a-element
      description: a要素のclickイベントを上書きして独自の振る舞いをさせたいという場合、デフォルトの挙動を漏れなく再現する必要があり、そのためにはブラウザ仕様の詳細な理解が欠かせない。その具体的な実装方法についての解説。
      provider: シフトブレイン／スタンダードデザインユニット

projects:
    - title: ゆうへいのプリントTシャツ
      link: https://scrapbox.io/yuhei-print-tshirt/
      description: 自分が集めたプリントTシャツを記録しているScrapbox。

    - title: accrefs
      link: https://accrefs.jp/
      description: ウェブアクセシビリティの参考資料をまとめたサイト。日本語の資料を中心にリンク数は200を超える。サイトのデザインおよび実装に携わる。有志のメンバーにより制作・運営されている。

    - title: yuhei blog
      link: https://yuheiy.hatenablog.com/
      description: 過去に更新していた個人ブログ。更新終了済み。

    - title: シフトブレイン／スタンダードデザインユニット
      link: https://standard.shiftbrain.com/
      description: 自社で所属していたチームのウェブサイト。更新終了済み。

eleventyComputed:
    title: "{{metadata.simei}}"
    description: "{{metadata.description}}"
---

{{metadata.description}}

監訳を担当した書籍『[Every Layout─モジュラーなレスポンシブデザインを実現するCSS設計論]({{prettyUrl "/20211011-publication-of-everylayout.html"}})』が[オンライン書店などで発売中](https://www.hanmoto.com/bd/isbn/9784862465177)。
