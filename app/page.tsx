import type { Metadata } from "next";
import { ReadingFramework } from "@/components/ReadingFramework";
import { TimelineAtlas } from "@/components/TimelineAtlas";

export const metadata: Metadata = {
  title: "个人读书笔记时间轴",
  description:
    "融合四本科学类读书笔记的互动时间轴，以科学、技术、文明三条轨道追踪知识、能力与治理。",
};

const directionContract = `
<!--
THESIS
Timeline as a working reading instrument. It refuses a marketing hero followed by card rows.

OWN-WORLD
Graphite room, smoked navy film, projected paper, vermilion signal, archival controls.

STORY
Scan eras, select an event, then connect people, enabling conditions, effects, and tensions.

FIRST VIEWPORT
Slim masthead, narrow era index, central three-lane film, luminous right reading pane. Event nodes are the primary action.

FORM
Ranked form 7, scientific microfilm reader in read-mode staging. Seed d47b1c7f.
-->
`;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#timeline">
        跳到时间轴
      </a>
      <div
        className="direction-contract"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: directionContract }}
      />

      <header className="site-header">
        <a className="site-mark" href="#timeline" aria-label="回到时间轴开头">
          <span aria-hidden="true">S / T / C</span>
          <strong>科学 · 技术 · 文明</strong>
        </a>
        <nav aria-label="页面主导航">
          <a href="#timeline">时间轴</a>
          <a href="#reading-framework">理解框架</a>
          <a href="#source-boundaries">材料边界</a>
        </nav>
        <p>READING ATLAS</p>
      </header>

      <main>
        <TimelineAtlas />
        <ReadingFramework />
      </main>

      <footer className="site-footer">
        <p>四篇读书笔记融合稿的互动阅读版本</p>
        <p>时间轴是骨架，人物、制度与代价共同构成历史。</p>
      </footer>
    </>
  );
}
