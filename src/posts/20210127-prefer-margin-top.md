---
title: 垂直方向のマージンにはmargin-topを優先的に使う理由
published: "2021-01-26T17:13:39.216Z"
---

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

`margin-bottom`ではなく`margin-top`を使う派である旨をツイートしたら理由を尋ねられたので、それに対する回答です。大きくは次の3つです。

1. 末尾の要素の存在が任意である場合が多いため
2. Stackレイアウトとの取り合わせやすさのため
3. 隣接セレクターを使った場合分けができるようにするため

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">CSS、基本コンポーネントの上にマージン取る派と、下にマージン取る派がいると思うですけど、自分は今までずっと下で。というのは、その方が直感的だと感じるからなんですけど、見出しの下って結構縮めるよね？それを上マージンでやると結構頭こんがらがらない？って思うんだけどどうなんだろう</p>&mdash; Takeshi Takatsudo (@Takazudo) <a href="https://twitter.com/Takazudo/status/1348988615620128769?ref_src=twsrc%5Etfw">January 12, 2021</a></blockquote>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">なぜですか?</p>&mdash; ゆー (@uknmr) <a href="https://twitter.com/uknmr/status/1349155640841695233?ref_src=twsrc%5Etfw">January 13, 2021</a></blockquote>

## 1. 末尾の要素の存在が任意である場合が多いため

コンポーネントやページなど、ある特定の区間内の末尾の要素は存在したりしなかったりすることが多い。重要度の高い情報を上から順に並べるとき、末尾の要素は相対的に重要度の低い情報を扱うことになり、ビューとしてはその有無が任意になったりする。

たとえばページタイトルは必須だけどページの説明文は任意になる場合。

```handlebars
<h1>{{title}}</h1>

\{{#if description}}
<p class="mt-3">\{{description}}</p>
\{{/if}}
```

あるいはカードパターンの下部にあるリンクやボタンが任意になる場合。

```handlebars
<div class="card">
	<p>{{title}}</p>
	<p class="mt-2">\{{description}}</p>

	\{{#if link}}
	<p class="mt-3"><a href="\{{link}}">さらに詳しく</a></p>
	\{{/if}}
</div>
```

カードパターンにはタグが含まれていることもあるかもしれない。

```handlebars
<div class="card">
	<p>垂直方向のマージンにはmargin-topを優先的に使う理由</p>
	<p class="mt-2">\{{description}}</p>

	\{{#if tags}}
	<ul class="mt-3">
		\{{#each tag in tags}}
		<li>\{{this}}</li>
		\{{/each}}
	</ul>
	\{{/if}}
</div>
```

こういうとき、末尾の要素には`margin-bottom`がついていない方が都合がいい。

カードパターンなどでボックス状の見た目になっているときには、`padding`や`border`を使ってマージンが相殺されない状態になっている。するとボックスの下部には、親の`padding-bottom`と末尾の要素の`margin-bottom`が足し合わされた量の余白ができてしまって不自然な見た目になる。

この問題を回避するために、要素内の末尾の要素からは`margin-bottom`を取り除くやり方がある。

```css
.card > :last-child {
	margin-bottom: 0;
}
```

しかしそもそも最初から`margin-top`を使うようにしておけば、このような規則を追加する必要がない。

もし先頭の要素の存在が任意である場合には、逆に`margin-bottom`を使った方がよくなる。ただ末尾の要素が任意である場合に比べて、先頭の要素が任意である場合の方が経験則上は格段に少ない。僕は実際にそのような場面に出くわしたときのみ例外的に`margin-bottom`を使うこともあるが、そうでない限りは基本的に`margin-top`を使っている。

すべてを`margin-top`に統一したければ、マークアップ側の工夫で`margin-bottom`を使わないこともできる。

```handlebars
\{{#if subtitle}}
<p>\{{subtitle}}</p>
<div class="mt-2"></div>
\{{/if}}

<h1>\{{title}}</h1>
```

## 2. Stackレイアウトとの取り合わせやすさのため

Stackレイアウトというのは[Every Layoutで紹介されているCSSのパターン](https://every-layout.dev/layouts/stack/)のことで、具体的には次のような実装になる。

```css
.stack > * + * {
	margin-top: 1.5rem;
}
```

```handlebars
<div class="stack">
	<p>{{title}}</p>
	<p>margin-bottomではなくmargin-topを使う派である旨をツイートしたら理由を尋ねられたので、それに対する回答です。</p>
	<p><a href="{{prettyUrl page.url}}">さらに詳しく</a></p>
</div>
```

こうすることで自動的に子要素の要素間にのみ同じ大きさの余白ができるようになる。すると末尾の要素の存在が任意になっていたとしても余白は自動的に調整されるので、余白の大きさが等しい場合にはStackレイアウトを採用すると先述の問題を回避できる。あるいは余白の大きさが違ったとしても、都度隣接セレクター（Adjacent sibling combinator）を使うことで、複数の要素が続いた場合にのみ余白を開ける実装ができる。

いずれにしてもStackレイアウトを採用する場合には`margin-top`を必ず使うことになるので、Stackレイアウトを常用する僕としては、Stackレイアウトを使わない場面でも一貫性の意味で`margin-top`に統一しておく方が混乱が少なくて済む。

また複数のStackレイアウトが横並びになった場合に、特定の要素の配置を下部に合わせる用法もある。

<iframe height="500" style="width: 100%;" scrolling="no" title="Card Grid by Stack Layouts" src="https://codepen.io/yuheiy/embed/oNzKZOr?height=500&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/yuheiy/pen/oNzKZOr'>Card Grid by Stack Layouts</a> by Yuhei Yasuda
  (<a href='https://codepen.io/yuheiy'>@yuheiy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

末尾の要素の前に`margin-bottom: auto`を指定すると、要素の高さに関わらず次に来る要素が下部に揃うようになる。

```css
.stack {
	display: flex;
	flex-direction: column;
	height: 100%;
}

.stack > * + * {
	margin-top: 1.5rem;
}

.stack > :nth-child(2) {
	margin-bottom: auto;
}
```

例では2番目の要素に`margin-bottom: auto`が指定されているが、同時に3番目の要素の`margin-top`が引き続き生きていることが重要になる。2番目の要素の`margin-bottom: auto`によって、余っている領域いっぱいまで3番目の要素が下部へ移動すると同時に、3番目の要素自身の`margin-top`によって、余っている領域の大きさに関わらずつねに空く余白の最低限の大きさが設定される。つまりこのレイアウトには`margin-top`と`margin-bottom`の両方が必要になる。

`margin-bottom`はこのパターンを実現するために温存している。

## 3. 隣接セレクターを使った場合分けができるようにするため

コンポーネント等の組み合わせによって縦方向の余白の大きさに違いがある場合、隣接セレクターを活用すると余白の大きさを場合分けできるようになる。「デフォルトでは段落の上に`1.5rem`の余白ができて、段落が見出しと隣接する場合には少し狭めの`1rem`にしたい」ということであれば次のようになる。

```css
p {
	margin-top: 1.5rem;
}

h2 + p {
	margin-top: 1rem;
}
```

`margin-bottom`では同様のやり方をするのは難しい。Aの隣のBに対して宣言するという表現になる以上、AとBとの間の余白を設定するためには`margin-top`を使うしかない。隣接セレクターを使って`margin-bottom`を調整できると役に立つ場面もあるかもしれないが、まれだろう。