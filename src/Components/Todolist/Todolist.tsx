import React from "react";
import s from './Todolist.module.css'

export const Todolist = () => {
	return (
		<div className={s.container}>
			<h2>Hello</h2>
			<div className={s.inputContaiher}>
				<input type="text"
					placeholder="Type new task"
				/>
				<button>+</button>
			</div>
			<ul className={s.list}>
				<li className={s.item}>
					<input type="checkbox"
						checked={true} />
					<span>Rest API</span>
					<button>X</button>
				</li>
				<li className={s.item}>
					<input type="checkbox" />
					<span>Rest API</span>
					<button>X</button>
				</li>
				<li className={s.item}>
					<input type="checkbox" />
					<span>Rest API</span>
					<button>X</button>
				</li>
				<li className={s.item}>
					<input type="checkbox" />
					<span>Rest API</span>
					<button>X</button>
				</li>

			</ul >
			<div className={s.actives}>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
		</div >
	)
}