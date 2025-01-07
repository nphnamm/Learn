// import { createStore } from "https://cdn.skypack.dev/redux";

/******************* MY REDUX ********************/
const createStore = (reducer) => {
	let state = reducer(undefined, {});
	let subscribers = [];

	return {
		getState() {
			return state;
		},
		dispatch(action) {
			state = reducer(state, action);

			subscribers.forEach((subscriber) => subscriber());
		},
		subscribe(subscriber) {
			subscribers.push(subscriber);
		}
	};
};

/******************* MY APP *******************/

const initialState = 0;

// Reducer
const bankReducer = (state = 0, action) => {
	switch (action.type) {
		case "DEPOSIT":
			return state + action.payload;
		case "WITHDRAW":
			return state - action.payload;
		default:
			return state;
	}
};

// store
const store = (window.store = createStore(bankReducer));

// actions
const actionDeposit = (payload) => {
	return {
		type: "DEPOSIT",
		payload
	};
};

const actionWithdraw = (payload) => {
	return {
		type: "WITHDRAW",
		payload
	};
};

// DOM events
const deposit = document.querySelector("#deposit");
const withdraw = document.querySelector("#withdraw");

// Event handlers
deposit.onclick = () => {
	store.dispatch(actionDeposit(10));
};

withdraw.onclick = () => {
	store.dispatch(actionWithdraw(10));
};

// Listeners
store.subscribe(() => {
	render();
});

const render = () => {
	const output = document.querySelector("#output");
	output.innerText = store.getState();
};

render();
