import * as React from 'react';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { ClipLoader } from 'react-spinners';

export default function TimetableLinkForm() {
  function formSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
  }
  const [isLoading, setIsLoading] = React.useState(false);
  const fieldRef = React.useRef<HTMLTextAreaElement | null>(null);

  return (
    <div className='flex h-full w-full justify-center'>
      {!isLoading && (
        <form
          onSubmit={formSubmitHandler}
          className='mt-2 flex w-8/12 flex-col items-center'
        >
          <textarea
            autoComplete='off'
            name='timetable-link-field'
            id='timetable-link-field'
            placeholder='Paste your NUSMods timetable links here, line by line!'
            className='h-48 w-full rounded border-2 border-slate-500 p-4 text-start transition duration-300 selection:border-blue-400'
            ref={fieldRef}
          ></textarea>
          <div className='mt-2 flex w-full justify-center'>
            <button
              type='submit'
              className='flex items-center gap-2 rounded border-2 border-slate-500 px-4 py-1 text-xl transition duration-300 hover:bg-green-200'
            >
              Convert <BsArrowCounterclockwise />
            </button>
          </div>
        </form>
      )}
      <ClipLoader
        loading={isLoading}
        color='#3b82f6'
        size={50}
        className='mt-8'
      />
    </div>
  );
}
