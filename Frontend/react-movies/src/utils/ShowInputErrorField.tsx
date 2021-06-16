export default function ShowInputErrorField(props: showInputErrorFieldProps){
    return <div className='text-danger'>{props.message}</div>;
}

interface showInputErrorFieldProps{
    message?: string;
}