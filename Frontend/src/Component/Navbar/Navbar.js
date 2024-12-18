import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";



const navigation = [
    { name: 'Home', to: '/'},
    { name: 'Projects', to: '/projects'},
    { name: 'Experience', to: '/experience',},
    { name: 'Contact', to: '/contact'}
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    const handleDownload = () => {
        fetch('./Rahul_Rajput_Resume.pdf')
        .then(res => res.blob())
        .then((res) => {
            const URL = window.URL.createObjectURL(res);
            let alink = document.createElement('a');
            alink.href = URL;
            alink.download = 'Rahul_Rajput_Resume.pdf';
            alink.click();
        })
    }
    return (
        <Disclosure as="nav" className="shadow-xl fixed z-20 bg-white w-full lg:w-11/12 left-1/2 rounded-md -translate-x-1/2 md:top-3 p-1">
            {({ open }) => (
                <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-[#3225EC] hover:text-second focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden md:block md:ml-6">
                                    <div className="flex space-x-4 justify-center items-center">
                                        {navigation.map((item) => (
                                            <Link
                                                key={`large-${item.name}`}
                                                to={item.to}
                                                className={classNames(
                                                    'text-[#3225EC] px-3 py-2 text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                        <button className='text-white box-border bg-[#3225EC] rounded-full hover:bg-white hover:text-[#3225EC] px-3 py-2 text-base font-medium' onClick={handleDownload}>Download Resume</button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className='flex flex-row'>
                                    <a href='https://www.linkedin.com/in/rahulrajput83/'
                                        type="button"
                                        className="p-1 hover:text-main rounded-full text-[#3225EC]"
                                    >
                                        <FaLinkedinIn className='h-6 w-6' aria-hidden='true' />
                                    </a>
                                    <a href='https://github.com/rahulrajput83'
                                        type="button"
                                        className="p-1 hover:text-main rounded-full text-[#3225EC] ml-2 md:ml-6"
                                    >
                                        <FaGithub className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                    <a href='https://www.instagram.com/rajput_rahul8'
                                        type="button"
                                        className="p-1 hover:text-main rounded-full text-[#3225EC] ml-2 md:ml-6"
                                    >
                                        <FaInstagram className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="px-3 pt-2 pb-3 transition-all duration-1000 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className={classNames(
                                        'text-[#3225EC] block px-3 py-2 rounded-md text-base font-medium w-fit'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className='text-white box-border bg-[#3225EC] rounded-full hover:bg-white hover:text-[#3225EC] px-3 py-2 text-base font-medium' onClick={handleDownload}>Download Resume</button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
