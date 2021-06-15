import { useFormikContext } from 'formik';
import { locationDTO } from './location.model';
import Maps from './Map';
export default function FormMap(props: formMapProps) {
    const {values}=useFormikContext<any>();
    
    function updateFields(location: locationDTO){
        values[props.latField] = location.lat;
        values[props.lngField] = location.lng;
    }
    return(
        <Maps locations={props.locations} handleMapClick={updateFields} />
    )
}

interface formMapProps {
  locations: locationDTO[];
  latField: string;
  lngField: string;
}

FormMap.defaultProps = {
    locations: []
}