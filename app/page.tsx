'use client'

import React from 'react'

type TodoItem = {
  title: string
  priority: 1 | 2 | 3 | 4
  dateAdded: string
  completed: boolean
}

// Priorities:
// 1 - do today
// 2 - do this week
// 3 - do at some point in the future
// 4 - idea bank

// Future fields to add
// dateUpdated: "2023-11-26T18:32:59.330Z", // TODO: future addition
const data = [
  {
    title: 'Clean out the refrigerator',
    priority: 2,
    dateAdded: '2023-11-26T19:45:12.120Z',
    completed: false,
  },
  {
    title: 'Organize bookshelf',
    priority: 4,
    dateAdded: '2023-11-26T20:15:28.512Z',
    completed: false,
  },
  {
    title: 'Water the plants',
    priority: 1,
    dateAdded: '2023-11-27T08:00:00.000Z',
    completed: false,
  },
  {
    title: 'Create a shopping list',
    priority: 2,
    dateAdded: '2023-11-27T10:30:45.789Z',
    completed: false,
  },
  {
    title: 'Reply to emails',
    priority: 3,
    dateAdded: '2023-11-27T14:20:33.225Z',
    completed: false,
  },
  {
    title: 'Exercise for 30 minutes',
    priority: 1,
    dateAdded: '2023-11-28T07:45:00.000Z',
    completed: false,
  },
  {
    title: 'Write in journal',
    priority: 2,
    dateAdded: '2023-11-28T09:15:18.678Z',
    completed: false,
  },
  {
    title: 'Prepare dinner',
    priority: 3,
    dateAdded: '2023-11-28T18:00:00.000Z',
    completed: false,
  },
  {
    title: 'Review project proposal',
    priority: 1,
    dateAdded: '2023-11-29T13:40:55.123Z',
    completed: false,
  },
  {
    title: 'Set goals for the week',
    priority: 2,
    dateAdded: '2023-11-29T16:55:29.876Z',
    completed: false,
  },
] as TodoItem[]

export default function Home() {
  const [currentTodo, setCurrentTodo] = React.useState('')
  const [prio1Todos, setPrio1Todos] = React.useState<TodoItem[]>([])
  const [prio2Todos, setPrio2Todos] = React.useState<TodoItem[]>([])
  const [prio3Todos, setPrio3Todos] = React.useState<TodoItem[]>([])
  const [prio4Todos, setPrio4Todos] = React.useState<TodoItem[]>([])

  const handleCheckTodo = (e) => {
    console.log(e)
  }

  React.useEffect(() => {
    // Sort todos by prio
    const p1Buffer = [] as TodoItem[]
    const p2Buffer = [] as TodoItem[]
    const p3Buffer = [] as TodoItem[]
    const p4Buffer = [] as TodoItem[]

    data.forEach((todo) => {
      switch (todo.priority) {
        case 1:
          p1Buffer.push(todo)

        case 2:
          p2Buffer.push(todo)

        case 3:
          p3Buffer.push(todo)

        case 4:
          p4Buffer.push(todo)

        default:
          console.log('Missing or invalid priority: ', todo.priority)
      }
    })

    setPrio1Todos(p1Buffer)
    setPrio2Todos(p2Buffer)
    setPrio3Todos(p3Buffer)
    setPrio4Todos(p4Buffer)
  }, [])

  console.log(prio1Todos)
  console.log(prio2Todos)
  console.log(prio3Todos)
  console.log(prio4Todos)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="my-4">
        <label
          htmlFor="currentTodo"
          className="block text-white text-sm font-bold mb-2"
        >
          What's on your mind today?
        </label>
        <input
          type="text"
          id="currentTodo"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 text-black"
          placeholder="I wanna..."
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div>
          <h3>Today (x) [prio: 1]</h3>
          <ul>
            {prio1Todos.map((item) => (
              <li key={item.title}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600 h-5 w-5"
                    checked={item.completed}
                    onChange={() => handleCheckTodo(item)}
                  />
                  {item.title}
                </label>
                <span>❌</span>
                <select
                  // value={selectedOption}
                  // onChange={handleSelectChange}
                  className="form-select w-full p-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </li>
            ))}
          </ul>
        </div>
        <div>This week (x) [prio: 2]</div>
        <div>Some day (x) [prio: 3]</div>
        <div>Idea bank (x) [prio: 4]</div>
      </div>

      <h3>raw data</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
