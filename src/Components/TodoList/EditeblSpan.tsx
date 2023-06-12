import { ChangeEvent, KeyboardEvent, useState } from "react"

type EditeblSpanPropsType = {
	title: string
}
export const EditeblSpan = (props: EditeblSpanPropsType) => {
	const [editMode, seteditMode] = useState(false)

	const onEditMode = () => {
		seteditMode(true)
	}
	const onViewMode = () => {
		seteditMode(false)
	}
	return editMode
		? <input onBlur={onViewMode} type="text" value={props.title} />
		: <span onDoubleClick={onEditMode}>{props.title} </span>
}