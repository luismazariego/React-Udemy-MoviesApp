import { useFormikContext } from 'formik';
import { useState } from 'react';
import { ChangeEvent } from 'react';

export default function FormGroupImage(props: formGroupImageProps) {
  const divStyle = { marginTop: '10px' };
  const imgStyle = { width: '450px' };
  const [base64Image, setBase64Image] = useState('');
  const [imageUrl, setImageUrl] = useState(props.imageUrl);
  const { values } = useFormikContext<any>();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      toBase64(file)
        .then((base64Value: string) => setBase64Image(base64Value))
        .catch((err) => console.error(err));

      values[props.field] = file;
      setImageUrl('');
    }
  };

  const toBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
    });
  };

  return (
    <div className='form-group'>
      <label>{props.label}</label>
      <div>
        <input type='file' accept='.jpg,.jpeg,.png' onChange={handleOnChange} />
      </div>
      {base64Image ? (
        <div>
          <div style={divStyle}>
            <img style={imgStyle} src={base64Image} alt='Selected image' />
          </div>
        </div>
      ) : null}
      {imageUrl ? (
        <div>
          <div style={divStyle}>
            <img style={imgStyle} src={imageUrl} alt='Selected image' />
          </div>
        </div>
      ) : null}
    </div>
  );
}

interface formGroupImageProps {
  field: string;
  label: string;
  imageUrl: string;
}

FormGroupImage.defaultProps = {
  imageUrl: '' 
}