'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { europeanCountriesDDI } from '@/utils/countries-data'

interface FormProps {
    searchParams: {
        utm_content?: string;
        utm_campaign?: string;
        utm_term?: string;
        utm_source?: string;
        utm_medium?: string;
        pagina?: string;
    }
}

export function Form({ searchParams: { utm_campaign, utm_content, utm_medium, utm_source, utm_term, pagina } }: FormProps) {
    const [userDDI, setUserDDI] = useState<string | null>(null);
    const [selectedDDI, setSelectedDDI] = useState<{ country: string; ddi: string } | null>(null);

    useEffect(() => {
        // Fetch the user's location and set the default DDI
        fetch('https://ipinfo.io/json?token=30e04fddb7778d')
            .then(async res => {
                const response = await res.json();

                const userCountryData = europeanCountriesDDI.find(
                    (ddi) => ddi.code === response.country
                );

                const userData = userCountryData

                //@ts-ignore
                setSelectedDDI(userData);
                //@ts-ignore
                setUserDDI(userData.ddi);

                const selectElement = document.getElementById('ddi-select') as HTMLSelectElement;

                if (selectElement) {

                    setTimeout(() => {
                        //@ts-ignore
                        selectElement.value = userData.ddi;

                        // Atualizar o texto da opção selecionada para mostrar apenas o DDI do usuário
                        Array.from(selectElement.options).forEach(option => {
                            //@ts-ignore
                            if (option.value === userData.ddi) {
                                //@ts-ignore
                                option.text = userData.ddi; // Exibir apenas o DDI na opção selecionada
                            } else {
                                option.text = `${europeanCountriesDDI.find(ddi => ddi.ddi === option.value)?.country} (${option.value})`;
                            }
                        });
                    }, 200)
                }
            })
            .catch(error => console.error('Error fetching location:', error));
    }, []);

    let cont = 0;
    const pag = usePathname().split('/');
    useEffect(() => {
        // Inject the external form script
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://duasporuma.activehosted.com/f/embed.php?id=30';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;
            document.body.appendChild(script);
            cont++;
        }
    }, []);

    useEffect(() => {
        // Set UTM parameters dynamically

        if (typeof window !== 'undefined') {
            setTimeout(() => {

                const utmsource = new URLSearchParams(window.location.search).get('utm_source')
                const utmcampaign = new URLSearchParams(window.location.search).get('utm_medium')
                const utmmedium = new URLSearchParams(window.location.search).get('utm_campaign')
                const utmcontent = new URLSearchParams(window.location.search).get('utm_content')
                const utmterm = new URLSearchParams(window.location.search).get('utm_term')

                const inpt0 = document.getElementById('field[80]') as HTMLInputElement; // pagina
                const inpt1 = document.getElementById('field[112]') as HTMLInputElement; // utmsource
                const inpt3 = document.getElementById('field[113]') as HTMLInputElement; // utmcampaign
                const inpt2 = document.getElementById('field[114]') as HTMLInputElement; // utmmedium
                const inpt4 = document.getElementById('field[115]') as HTMLInputElement; // utmcontent
                const inpt5 = document.getElementById('field[116]') as HTMLInputElement; // utmterm

                inpt0.value = pag[1] || 'nao-traqueado';
                inpt1.value = utmsource || 'nao-traqueado';
                inpt2.value = utmcampaign || 'nao-traqueado';
                inpt3.value = utmmedium || 'nao-traqueado';
                inpt4.value = utmcontent || 'nao-traqueado';
                inpt5.value = utmterm || 'nao-traqueado';
            }, 2000);
        }
    }, [cont]);

    useEffect(() => {
        // Monitor for the #phone input and insert the DDI <select> when detected
        setTimeout(() => { }, 200)

        const insertSelectIntoPhoneInput = () => {
            const phoneInput = document.querySelector('#phone') as HTMLInputElement;
            if (phoneInput && !document.querySelector('#ddi-select')) {
                const selectContainer = document.createElement('div');
                selectContainer.style.display = 'flex';
                selectContainer.style.alignItems = 'center';

                const selectElement = document.createElement('select');
                selectElement.id = 'ddi-select';
                selectElement.style.marginRight = '8px';
                europeanCountriesDDI.forEach((ddi) => {
                    const option = document.createElement('option');
                    option.value = ddi.ddi;
                    option.text = `${ddi.country} (${ddi.ddi})`;
                    selectElement.appendChild(option);
                });

                selectElement.classList.add('rounded-full', 'h-[52px]', 'z-50', 'font-semibold')
                selectElement.style.width = '4em'
                selectElement.value = userDDI || '';
                selectElement.addEventListener('change', (e) => {
                    const selectedDDI = europeanCountriesDDI.find(ddi => ddi.ddi === (e.target as HTMLSelectElement).value);
                    setUserDDI(selectedDDI?.ddi || '');
                    setSelectedDDI(selectedDDI || null);

                    // Update text to show only the DDI when selected
                    Array.from(selectElement.options).forEach(option => {
                        option.text = option.value === selectedDDI?.ddi ? selectedDDI.ddi : `${europeanCountriesDDI.find(ddi => ddi.ddi === option.value)?.country} (${option.value})`;
                    });
                });

                selectContainer.appendChild(selectElement);
                phoneInput.parentNode?.insertBefore(selectContainer, phoneInput);
                selectContainer.appendChild(phoneInput);

                // phoneInput.addEventListener('input', handlePhoneInput);
            }
        };

        const handlePhoneInput = (event: Event) => {
            const input = event.target as HTMLInputElement;
            let value = input.value.replace(/\D/g, '');

            if (value.length > 3) {
                value = `${value.slice(0, 3)} ${value.slice(3)}`;
            }
            if (value.length > 7) {
                value = `${value.slice(0, 7)} ${value.slice(7)}`;
            }
            if (value.length > 11) {
                value = `${value.slice(0, 11)} ${value.slice(11, 13)}`;
            }

            input.value = value;
        };

        const observer = new MutationObserver(insertSelectIntoPhoneInput);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, [userDDI]);

    useEffect(() => {
        // Adicionar DDI ao telefone ao enviar o formulário
        const submitButton = document.getElementById('_form_30_submit') as HTMLButtonElement;
        if (submitButton) {
            submitButton.addEventListener('click', (event) => {
                event.preventDefault()

                const phoneInput = document.getElementById('phone') as HTMLInputElement;
                const form = document.querySelector('form[id^="_form_"]') as HTMLFormElement;

                if (phoneInput && userDDI) {
                    // Remover qualquer DDI antigo do valor do telefone
                    phoneInput.value = phoneInput.value.replace(/^\+\d+\s*/, '');
                    // Adicionar o DDI atual selecionado
                    phoneInput.value = `${userDDI} ${phoneInput.value}`;
                }

                form.submit()
                submitButton.click()

                const email = document.querySelector('#email') as HTMLInputElement

                setTimeout(() => {
                    const thankYouURL = `https://duasporuma.com.br/obrigada/?email=${email.value}`;
                    window.location.href = thankYouURL;
                }, 1000);
            });
        }

        return () => {
            if (submitButton) {
                submitButton.removeEventListener('click', () => { });
            }
        };
    }, [userDDI]);

    return (
        <div className="relative w-full h-[256px]">
            <div className="absolute left-0 top-0 h-[180px] w-[384px] flex items-center justify-center">
                <svg className="loader" viewBox="25 25 50 50">
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </div>
            <div id="_forms_30" className={`_form_30 max-w-sm -translate-y-4 z-50`}></div>
        </div>
    );
}
