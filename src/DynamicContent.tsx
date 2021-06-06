export default function DynamicContent(props: DynamicContentProps) {
    //Ex.1 Ternary Operator
    // return (
    //     <div>
    //         {props.showSecretMessage ? <span>Secret: 42</span> : null}
    //     </div>
    // )

    //props.grade = props.grade ? props.grade : 0;
    //Ex.2 If
    if(props?.grade && props.grade  > 90){
        return (
            <div>
                <h3>{props.name} Excellent!</h3>
            </div>
        )
    }
    else if (props?.grade && props.grade >= 80 && props.grade <= 90) {
      return (
        <div>
          <h3>{props.name} Very well!</h3>
        </div>
      );
    } else if (props?.grade && props.grade >= 0 && props.grade < 80) {
      return (
        <div>
          <h3>{props.name} Lol</h3>
        </div>
      );
    }
    else {
      throw `There is a mistake with ${props.name}'s grade`;
    }
}

interface DynamicContentProps {
    showSecretMessage?: Boolean;
    grade?: number;
    name: string;
}
