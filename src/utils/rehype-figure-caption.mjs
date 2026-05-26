/**
 * rehype 플러그인: <img> 바로 뒤에 오는 <em>을 <figure>/<figcaption>으로 변환
 *
 * 변환 전: <p>...<img ...><em>캡션</em></p>
 * 변환 후: <p>...<figure><img ...><figcaption>캡션</figcaption></figure></p>
 */
export function rehypeFigureCaption() {
  return tree => {
    transformNode(tree);
  };
}

function transformNode(node) {
  if (!node.children) return;

  const newChildren = [];
  let i = 0;

  while (i < node.children.length) {
    const child = node.children[i];

    if (isImg(child)) {
      // img 다음의 공백 텍스트 노드를 건너뜀
      let j = i + 1;
      while (j < node.children.length && isWhitespace(node.children[j])) j++;

      if (j < node.children.length && isEm(node.children[j])) {
        // img + em → figure + figcaption
        newChildren.push({
          type: "element",
          tagName: "figure",
          properties: { className: ["image-figure"] },
          children: [
            child,
            {
              type: "element",
              tagName: "figcaption",
              properties: {},
              children: node.children[j].children,
            },
          ],
        });
        i = j + 1;
        continue;
      }
    }

    // img가 아닌 노드는 재귀 처리
    transformNode(child);
    newChildren.push(child);
    i++;
  }

  node.children = newChildren;
}

function isImg(node) {
  return node?.type === "element" && node.tagName === "img";
}

function isEm(node) {
  return node?.type === "element" && node.tagName === "em";
}

function isWhitespace(node) {
  return node?.type === "text" && node.value.trim() === "";
}
