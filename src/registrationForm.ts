import { form, modal, candidateData } from "./main";

export function handleSubmit(): void {
    const formData = new FormData(form)

    const studentData = {
        name: formData.get('name') as string,
        surname: formData.get('surname') as string,
        email: formData.get('email') as string,
        nationality: formData.get('nationality') as string,
        address: formData.get('address') as string
    };

    localStorage.setItem('studentData', JSON.stringify(studentData));
    console.log(modal)
    modal.classList.add('modalShown')
    let infoJson = JSON.parse(localStorage.getItem('studentData'))
    candidateData[0].textContent = infoJson.name
    candidateData[1].textContent = infoJson.nationality
    candidateData[2].textContent = infoJson.address

}