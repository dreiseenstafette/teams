
import { BanknotesIcon, InformationCircleIcon, MapIcon } from '@heroicons/react/24/outline'

export interface InfoPoint {
  name: string;
  icon(props: any): JSX.Element;
  description: string;
}

export const InfoPointRun: InfoPoint = {
  name: 'Laufen',
  icon: (props: any) => (<MapIcon {...props} />),
  description: 'Auf der Laufstrecke befinden sich 2 Verpflegungsposten mit Bananen, Riegeln, Wassser und einem isotonischen Getränk.',
};

export const InfoPointCycling: InfoPoint = {
  name: 'Radfahren',
  icon: (props: any) => (<MapIcon {...props} />),
  description: 'Die Strecken sind mit Schilder und/oder Bodenmarkierungen markiert. Die Strassen sind jedoch nicht gesperrt - die Verkehrsregeln müssen beachtet werden.',
};

export const InfoPointSwim: InfoPoint = {
  name: 'Schwimmen',
  icon: (props: any) => (<MapIcon {...props} />),
  description: 'Es wird im Hüttwilersee geschwommen. Ob ein Neopren erlaubt ist wird am Wettkampftag anhand der Wassertemperatur entschieden.',
};

export default function Infos({ props }: { props: InfoPoint[] }) {
  return (
    <div className="">
      <dl className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:gap-x-8">
        {props.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <feature.icon className="absolute h-6 w-6 text-blue-500" aria-hidden="true" />
              <p className="ml-9 text-lg font-medium text-gray-900">{feature.name}</p>
            </dt>
            <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
