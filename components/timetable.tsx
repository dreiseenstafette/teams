import { useState } from "react";

interface Event {
  category: string;
  time: string;
  event: string;
  location: string;
}

const all = 'Alle';
const stafette = 'Stafette';
const triathlon = 'Triathlon';
const seebachtaler = 'Diä schnellste Seebachtaler:inne';
const lauf = 'Lauf';

const categories = [
  all,
  stafette,
  triathlon,
  seebachtaler,
  lauf,
];

const getColor = (category: string) => {
  switch (category) {
    case all:
      return 'bg-green-100 text-green-800 hover:bg-green-200';
    case lauf:
      return 'bg-red-100 text-red-800 hover:bg-red-200';
    case seebachtaler:
      return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
    case triathlon:
      return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
    case stafette:
      return 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200';

    default:
      return 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200';
  }
};

const events: Array<Event> = [
  { time: '07:30', event: 'Öffnung Wettkampfgelände', location: '-', category: all },
  { time: '07:30 - 08:00', event: 'Startnummernausgabe Teamcaptains', location: 'Infopoint', category: stafette },
  { time: '08:15 - 08:30', event: 'Briefing Teamcaptains', location: 'Festzelt', category: stafette },
  { time: '08:00 - 09:00', event: 'Startnummernausgabe Triathlet:innen und Nachmeldungen', location: 'Infopoint', category: triathlon },
  { time: '09:00 - 10:00', event: 'Startnummernausgabe Lauf und Nachmeldungen', location: 'Infopoint', category: lauf },
  { time: '08:00 - 12:00', event: 'Startnummernausgabe "Diä schnellste Seebachtaler:inne" und Nachmeldungen', location: 'TV Hüttwilen Zelt', category: seebachtaler },
  { time: '09:45', event: 'Räumung Wechselzone + Briefing für Triathlon', location: 'Wechselzone', category: triathlon },
  { time: '10:00', event: 'Start Triathlon Olympic Distance - Men', location: 'Torbogen am See', category: triathlon },
  { time: '10:05', event: 'Start Triathlon Olympic Distance - Women', location: 'Torbogen am See', category: triathlon },
  { time: '10:15', event: 'Start Stafette lang', location: 'Torbogen am See', category: stafette },
  { time: '10:30', event: 'Start Stafette kurz', location: 'Torbogen am See', category: stafette },
  { time: '10:35', event: 'Start Triathlon Short Distance - Men', location: 'Torbogen am See', category: triathlon },
  { time: '10:40', event: 'Start Triathlon Short Distance - Women', location: 'Torbogen am See', category: triathlon },
  { time: '11:00', event: 'Start Lauf', location: 'Passerelle', category: lauf },
  { time: '13:00', event: 'Start "Diä schnellste Seebachtaler:inne"', location: 'Finish-Line', category: seebachtaler },
  { time: '14:00', event: 'Rangverkündigung Triathlon Short Distance', location: 'Festzelt', category: triathlon },
  { time: '14:15', event: 'Rangverkündigung Triathlon Olympic Distance', location: 'Festzelt', category: triathlon },
  { time: '14:30', event: 'Rangverkündigung Stafette kurz', location: 'Festzelt', category: stafette },
  { time: '14:45', event: 'Rangverkündigung Stafette lang', location: 'Festzelt', category: stafette },
  { time: '15:00', event: 'Finalläufe "Diä schnellste Seebachtaler:inne"', location: 'Finish-Line', category: seebachtaler },
  { time: '15:15', event: 'Rangverkündigung "Diä schnellste Seebachtaler:inne"', location: 'Festzelt', category: seebachtaler },
]

export default function Timetable() {
  const [filtered, setFiltered] = useState(events);
  const [filterTerm, setFilterTerm] = useState(all);

  const isFiltered = (filter: string): boolean => {
    return filterTerm === filter ? true : false;
  };

  const filter = (filter: string) => {
    setFilterTerm(filter);
    if (filter === all) {
      setFiltered(events);
      return
    }

    const tmp = new Array();
    events.forEach(event => {
      if (event.category === filter) {
        tmp.push(event);
      }
    });
    setFiltered(tmp);
  };

  return (
    <div className="">
      <div className="mt-8 flex flex-wrap justify-start">
        <span className="mr-3">Filtern nach: </span>
        {categories.map(category => (
          <button className={getColor(category) + ' inline-flex mr-3 items-center rounded-full my-1 ' + (isFiltered(category) ? '' : 'bg-gray-100') + ' px-3 py-0.5 text-sm font-medium text-gray-800'}
            onClick={() => filter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col">
        <div className="">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-md md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Zeit
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Event
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filtered.map((event) => (
                    <tr key={event.event}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {event.time} Uhr
                      </td>
                      <td className="whitespace-pre-wrap px-3 py-4 text-sm text-gray-500">{event.event}</td>
                      <td className="whitespace-pre-wrap px-3 py-4 text-sm text-gray-500">{event.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
