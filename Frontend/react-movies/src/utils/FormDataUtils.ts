import { createActorDTO } from "./../actors/actor.model.d";
export default function actorToFormData(actor: createActorDTO) {
    const formData = new FormData();
    
    formData.append('name', actor.name);
    if (actor.biography) {
        formData.append('biography', actor.biography);
    }
    if (actor.dateOfBirth) {
        formData.append("dateOfBirth", formattingDate(actor.dateOfBirth));
    }
    if (actor.photo) {
        formData.append("photo", actor.photo);
    }
    
    return formData;
}

function formattingDate(date:Date) {
    date = new Date();
    const format = new Intl.DateTimeFormat("en", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const [
        { value: month }, ,
        { value: day }, ,
        { value: year }
    ] = format.formatToParts(date);

    return `${year}-${month}-${day}`;
}