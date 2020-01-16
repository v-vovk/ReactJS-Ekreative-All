import React, { useRef } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value)
  // }

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      // console.log(title)
      // setTitle('')
    }
  }

  return (
    <div className='input-field mt2'>
      <input
        // value={title}
        // onChange={changeHandler}
        ref={ref}
        type='text'
        id='title'
        placeholder='Кушать'
        onKeyPress={keyPressHandler}
      />
      <label htmlFor='title' className='active'>
        Чё будем делать?
      </label>
    </div>
  )
}
