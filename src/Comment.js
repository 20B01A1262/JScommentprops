import Faker from 'faker';
import './styles.css';
function Comment(props) {
    return (
        <div className='comments'> 
        <div className='cards'>
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <img className="right floated mini ui image" src={Faker.image.image()} />
                        <div className="header">
                            {props.name}
                        </div>
                        <div className="meta">
                            {props.area}
                        </div>
                        <div className="description">
                            {props.info}
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button">Approve</div>
                            <div className="ui basic red button">Decline</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
};
export default Comment;