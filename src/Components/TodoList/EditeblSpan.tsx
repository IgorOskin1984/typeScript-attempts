import { useState } from "react"

type EditeblSpanPropsType = {
	title: string
}
export const EditeblSpan = (props: EditeblSpanPropsType) => {
	const [editMode, seteditMode] = useState(false)

	const activateEditMode = () => {
		seteditMode(true)
	}

	return editMode
		? <input type="text" value={props.title} />
		: <span onDoubleClick={activateEditMode}>{props.title}</span>

}