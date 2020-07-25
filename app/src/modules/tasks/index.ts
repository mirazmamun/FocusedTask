export interface IWithId {
  id: string;
}

type IReducer<T> = (state: T, action: any) => T;

type IState<T> = {
  selected: string;
  tasks: { [key: string]: T };
};

interface IAction {
  type: string;
  payload?: any;
}

interface IUndoTask {
  present: {
    id: string;
  };
}

export default function tasks<T extends IUndoTask>(reducer: IReducer<T>) {
  const task = reducer(undefined as any, {});

  const initialState: IState<T> = {
    selected: task.present.id,
    tasks: { [task.present.id]: task },
  };

  return function(state = initialState, action: IAction): IState<T> {
    switch (action.type) {
      case 'tasks/new':
        const newTask = reducer(undefined as any, { type: 'reset' });

        return {
          selected: newTask.present.id,
          tasks: {
            ...state.tasks,
            [newTask.present.id]: newTask,
          },
        };

      case 'tasks/select':
        if (!state.tasks[action.payload.task.id]) {
          return state;
        }

        return {
          selected: action.payload.task.id,
          tasks: state.tasks,
        };

      case 'tasks/delete':
        if (!state.tasks[action.payload.task.id]) {
          return state;
        }

        const tasks = { ...state.tasks };

        Reflect.deleteProperty(tasks, action.payload.task.id);

        let selected = state.selected;

        if (selected === action.payload.task.id) {
          selected = Object.keys(tasks)[0];

          if (!selected) {
            const replaceTask = reducer(undefined as any, { type: 'reset' });
            selected = replaceTask.present.id;
            tasks[selected] = replaceTask;
          }
        }

        return {
          selected,
          tasks,
        };

      default:
        const task = state.tasks[state.selected];

        if (!task) {
          return state;
        }

        const updatedTask = reducer(task, action);

        if (updatedTask === task) {
          return state;
        }

        return {
          selected: updatedTask.present.id,
          tasks: {
            ...state.tasks,
            [updatedTask.present.id]: updatedTask,
          },
        };
    }
  };
}
