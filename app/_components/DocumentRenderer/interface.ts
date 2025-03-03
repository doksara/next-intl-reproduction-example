export interface Level {
  id: string
  levelTitle: string
  levelTexts?: LevelText[]
  subLevels?: Level[]
}

export interface LevelText {
  text?: string
  listItems?: ListItem[]
}

export interface ListItem {
  text: string
  sublistItems?: SubListItem[]
}

export interface SubListItem {
  text: string
}
