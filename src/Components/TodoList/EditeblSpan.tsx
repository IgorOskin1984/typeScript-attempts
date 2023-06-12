import { ChangeEvent, KeyboardEvent, useState } from "react"

type EditeblSpanPropsType = {
	title: string
}
export const EditeblSpan = (props: EditeblSpanPropsType) => {
	const [editMode, seteditMode] = useState(false)

	const activateEditMode = () => {
		seteditMode(true)
	}
	const activateViewMode = () => {
		seteditMode(false)
	}
	return editMode
		? <input onBlur={activateViewMode} autoFocus type="text" value={props.title} />
		: <span onDoubleClick={activateEditMode}>{props.title} </span>
}