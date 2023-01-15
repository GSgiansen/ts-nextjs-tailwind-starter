import { useEffect, useState } from 'react';
import Timetable from 'react-timetable-events';

const Result = () => {
  const resultData = [
    [0, 1200],
    [1400, 1500],
    [1800, 2400],
  ];
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  const timetableComponent = () => {
    const events = {
      monday: [
        {
          id: 1,
          name: 'Custom Event 1',
          type: 'custom',
          startTime: new Date('2018-02-23T11:30:00'),
          endTime: new Date('2018-02-23T13:30:00'),
        },
      ],
      tuesday: [{
        id: 2,
        name: 'Custom Event 2',
        type: 'custom',
        startTime: new Date('2018-02-23T11:30:00'),
        endTime: new Date('2018-02-23T13:30:00'),
      },],
      wednesday: [
        {
          id: 3,
          name: 'Custom Event 3',
          type: 'custom',
          startTime: new Date('2018-02-23T11:30:00'),
          endTime: new Date('2018-02-23T13:30:00'),
        },
      ],
      thursday: [
        {
          id: 4,
          name: 'Custom Event 4',
          type: 'custom',
          startTime: new Date('2018-02-23T17:30:00'),
          endTime: new Date('2018-02-23T18:30:00'),
        },
      ],
      friday: [
        {
          id: 5,
          name: 'Custom Event 5',
          type: 'custom',
          startTime: new Date('2018-02-23T11:30:00'),
          endTime: new Date('2018-02-23T13:30:00'),
        },
      ],
    };
    const timetable = <Timetable events={events} style={{ height: '500px' }} />;

    if (!hasMounted) {
      return null;
    }
    return timetable;
  };

  return (
    <>
      <div>
        {typeof window !== 'undefined' ? timetableComponent() : null}
      </div>
    </>
  );
};

export default Result;
