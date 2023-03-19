import { XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie'


export default function Banner() {
  const [banner, setBanner] = useState(false);
  const [cookie, setCookie] = useCookies(["banner"]);

  const removeBanner = () => {
    setCookie("banner", JSON.stringify({ bannerClicked: true }), {
      path: '/',
      maxAge: 3600 * 24 * 7, // expires after 1 week
      sameSite: true,
    });
    window.location.reload();
  };

  // https://www.benmvp.com/blog/handling-react-server-mismatch-error/
  useEffect(() => {
    if (!cookie.banner) {
      setBanner(true);
    };
  });

  return (
    <div className={banner ? 'relative gradient' : 'hidden'}>
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="font-medium text-white">
            <span className="">Die nächste DSS findet am 20.08.2023 statt!</span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="https://onreg.datasport.com/dreiseenstafette-huettwilen-2023" target="_blank" className="font-bold text-white underline underline-offset-4">
                Anmelden
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-3 sm:items-start sm:pt-1 sm:pr-3">
          <button
            type="button"
            className="flex rounded-md p-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => removeBanner()}
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
