var textNode,
  walk = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false)
while ((textNode = walk.nextNode())) {
  textNode.nodeValue = textNode.nodeValue
    .replace(/Hollande/gi, 'Flamby')
    .replace(/François Hollande/gi, 'Flamby')
    .replace(/d'Hollande/gi, 'de Flamby')
}
