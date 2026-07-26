import {
  bookContributions,
  corePropositions,
  futureTechnologyMaturity,
  mechanismLines,
  progressTrapChecks,
  scientificLiteracy,
  sourceBoundaries,
} from "@/lib/insight-data";

const frameworkSections = [
  { href: "#core-propositions", label: "核心命题" },
  { href: "#mechanism-lines", label: "三条机制线" },
  { href: "#progress-checks", label: "进步五问" },
  { href: "#technology-maturity", label: "技术成熟度" },
  { href: "#scientific-literacy", label: "科学素养" },
  { href: "#book-contributions", label: "四书贡献" },
  { href: "#source-boundaries", label: "来源边界" },
] as const;

function visibleText(value: string) {
  return value.replace(/[\u2013\u2014]/g, "-");
}

function twoDigits(value: number) {
  return String(value).padStart(2, "0");
}

export function ReadingFramework() {
  return (
    <article
      id="reading-framework"
      className="reading-framework"
      aria-labelledby="reading-framework-title"
    >
      <header className="framework-lede">
        <div className="framework-lede__heading">
          <p className="section-kicker">时间轴之外</p>
          <h2 id="reading-framework-title">理解科学、技术与文明的思想骨架</h2>
        </div>
        <p className="framework-lede__summary">
          历史告诉我们变化发生在何时，下面这些命题继续追问：知识为何可信，能力如何形成，
          社会怎样承接技术，以及能力增长是否真的带来进步。
        </p>
      </header>

      <nav className="framework-index" aria-label="思想框架目录">
        <ol>
          {frameworkSections.map((section, index) => (
            <li key={section.href}>
              <a href={section.href}>
                <span className="framework-index__number" aria-hidden="true">
                  {twoDigits(index + 1)}
                </span>
                <span>{section.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section
        id="core-propositions"
        className="framework-section framework-section--propositions"
        aria-labelledby="core-propositions-title"
      >
        <header className="framework-section__header">
          <p className="section-index" aria-hidden="true">
            01
          </p>
          <div>
            <p className="section-kicker">判断起点</p>
            <h2 id="core-propositions-title">四个核心命题</h2>
          </div>
          <p>它们不是结论清单，而是贯穿四本书的阅读坐标。</p>
        </header>

        <ol className="proposition-sequence">
          {corePropositions.map((proposition, index) => (
            <li key={proposition.id} className="proposition">
              <article aria-labelledby={`${proposition.id}-title`}>
                <p className="proposition__number" aria-hidden="true">
                  {twoDigits(index + 1)}
                </p>
                <div className="proposition__body">
                  <h3 id={`${proposition.id}-title`}>
                    {visibleText(proposition.title)}
                  </h3>
                  <p>{visibleText(proposition.summary)}</p>
                </div>
                <p className="proposition__question">
                  <span className="proposition__question-label">追问</span>
                  <span>{visibleText(proposition.question)}</span>
                </p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="mechanism-lines"
        className="framework-section framework-section--mechanisms"
        aria-labelledby="mechanism-lines-title"
      >
        <header className="framework-section__header">
          <p className="section-index" aria-hidden="true">
            02
          </p>
          <div>
            <p className="section-kicker">跨时代结构</p>
            <h2 id="mechanism-lines-title">三条机制线</h2>
          </div>
          <p>能量扩大行动尺度，信息延长记忆与协作，制度让积累不必从头开始。</p>
        </header>

        <div className="mechanism-ledger">
          {mechanismLines.map((line, index) => (
            <details
              key={line.id}
              className="mechanism-entry"
              open={index === 0}
            >
              <summary>
                <h3>
                  <span className="mechanism-entry__number" aria-hidden="true">
                    M{twoDigits(index + 1)}
                  </span>
                  <span className="mechanism-entry__summary">
                    <strong>{visibleText(line.name)}</strong>
                    <span>{visibleText(line.question)}</span>
                  </span>
                  <span className="mechanism-entry__action" aria-hidden="true">
                    展开
                  </span>
                </h3>
              </summary>
              <div className="mechanism-entry__content">
                <ol aria-label={`${visibleText(line.name)}的发展序列`}>
                  {line.sequence.map((stage, stageIndex) => (
                    <li key={stage}>
                      <span aria-hidden="true">{twoDigits(stageIndex + 1)}</span>
                      <span>{visibleText(stage)}</span>
                    </li>
                  ))}
                </ol>
                <p>{visibleText(line.interpretation)}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section
        id="progress-checks"
        className="framework-section framework-section--checks"
        aria-labelledby="progress-checks-title"
      >
        <header className="framework-section__header">
          <p className="section-index" aria-hidden="true">
            03
          </p>
          <div>
            <p className="section-kicker">从能力转向后果</p>
            <h2 id="progress-checks-title">判断进步的五问</h2>
          </div>
          <p>不要只问技术是否更强，也要检查收益、控制权、失败方式与远期代价。</p>
        </header>

        <ol className="progress-checklist">
          {progressTrapChecks.map((check, index) => (
            <li key={check.id}>
              <article aria-labelledby={`${check.id}-title`}>
                <header>
                  <span aria-hidden="true">Q{twoDigits(index + 1)}</span>
                  <h3 id={`${check.id}-title`}>
                    {visibleText(check.dimension)}
                  </h3>
                </header>
                <dl>
                  <div>
                    <dt>表面问题</dt>
                    <dd>{visibleText(check.shallowQuestion)}</dd>
                  </div>
                  <div>
                    <dt>继续追问</dt>
                    <dd>{visibleText(check.deeperQuestion)}</dd>
                  </div>
                </dl>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="technology-maturity"
        className="framework-section framework-section--maturity"
        aria-labelledby="technology-maturity-title"
      >
        <header className="framework-section__header">
          <p className="section-index" aria-hidden="true">
            04
          </p>
          <div>
            <p className="section-kicker">避免把可能写成现实</p>
            <h2 id="technology-maturity-title">未来技术的六级成熟度</h2>
          </div>
          <p>原理成立只是起点。工程、成本、基础设施和治理决定它能否进入社会。</p>
        </header>

        <ol className="maturity-scale" aria-label="未来技术六级成熟度">
          {futureTechnologyMaturity.map((item) => (
            <li key={item.id} className="maturity-level">
              <article aria-labelledby={`${item.id}-title`}>
                <p className="maturity-level__number" aria-label={`第 ${item.level} 级`}>
                  {twoDigits(item.level)}
                </p>
                <div>
                  <h3 id={`${item.id}-title`}>{visibleText(item.name)}</h3>
                  <p>{visibleText(item.description)}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="scientific-literacy"
        className="framework-section framework-section--literacy"
        aria-labelledby="scientific-literacy-title"
      >
        <header className="framework-section__header">
          <p className="section-index" aria-hidden="true">
            05
          </p>
          <div>
            <p className="section-kicker">落回读者自身</p>
            <h2 id="scientific-literacy-title">科学素养的五种实践</h2>
          </div>
          <p>科学素养不仅是知道更多，也包括辨别边界、保留克制并承担行动责任。</p>
        </header>

        <div className="literacy-notes">
          {scientificLiteracy.map((item, index) => (
            <details key={item.id} open={index === 0}>
              <summary>
                <h3>
                  <span aria-hidden="true">{twoDigits(index + 1)}</span>
                  <span>{visibleText(item.title)}</span>
                </h3>
              </summary>
              <div>
                <p>{visibleText(item.description)}</p>
                <p className="literacy-notes__prompt">
                  <span>自问</span>
                  {visibleText(item.prompt)}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section
        id="book-contributions"
        className="framework-section framework-section--books"
        aria-labelledby="book-contributions-title"
      >
        <header className="framework-section__header">
          <p className="section-index" aria-hidden="true">
            06
          </p>
          <div>
            <p className="section-kicker">四本书的分工</p>
            <h2 id="book-contributions-title">同一问题的四个观察层</h2>
          </div>
          <p>四本书彼此补足，也各自带着需要警惕的解释盲区。</p>
        </header>

        <div className="book-ledger">
          {bookContributions.map((book, index) => (
            <article key={book.id} aria-labelledby={`${book.id}-title`}>
              <header>
                <span className="book-ledger__number" aria-hidden="true">
                  B{twoDigits(index + 1)}
                </span>
                <div>
                  <p>{visibleText(book.layer)}</p>
                  <h3 id={`${book.id}-title`}>{visibleText(book.title)}</h3>
                </div>
              </header>
              <p className="book-ledger__question">
                <span>核心追问</span>
                {visibleText(book.asks)}
              </p>
              <dl>
                <div>
                  <dt>主要贡献</dt>
                  <dd>{visibleText(book.contribution)}</dd>
                </div>
                <div>
                  <dt>阅读警戒</dt>
                  <dd>{visibleText(book.caution)}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <aside
        id="source-boundaries"
        className="framework-section framework-section--boundaries"
        aria-labelledby="source-boundaries-title"
      >
        <header className="framework-section__header">
          <p className="section-index" aria-hidden="true">
            07
          </p>
          <div>
            <p className="section-kicker">使用说明</p>
            <h2 id="source-boundaries-title">来源与解释边界</h2>
          </div>
          <p>这是一份个人读书笔记母稿。它提供理解框架，不代替原书、一手资料与更新研究。</p>
        </header>

        <ul className="boundary-notes">
          {sourceBoundaries.map((boundary, index) => (
            <li key={boundary.id}>
              <article aria-labelledby={`${boundary.id}-title`}>
                <span aria-hidden="true">{twoDigits(index + 1)}</span>
                <div>
                  <h3 id={`${boundary.id}-title`}>
                    {visibleText(boundary.title)}
                  </h3>
                  <p>{visibleText(boundary.description)}</p>
                  <p className="boundary-notes__implication">
                    <strong>使用时：</strong>
                    {visibleText(boundary.implication)}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
