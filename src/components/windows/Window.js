import ContentIcon from './ContentIcon';

import './Window.scss';

const Window = (props) => {

    const { id, title, type, status, active, setTasks } = props;

    const handleStatus = (taskId, status) => {
        setTasks(state => {
            const newState = structuredClone(state);
            const task = newState.find((original) => original.id === taskId);
            task.status = status;
            return newState;
        })
    };

    return ( 
        <div className={active ? 'window ' + status + ' active' : 'window ' + status}>
            <div className="window-toolbar">   
                <div className="window-title">{title}</div>   
                <div className="window-buttons">
                    <div className="window-button window-close" onClick={() => handleStatus(id, '')}></div>
                    { type !== 'alert' && <div className="window-button window-minimize" onClick={() => handleStatus(id, 'minimized')}></div> }
                </div>        
            </div>
            { type !== 'alert' &&
                <div className="options line">
                    <div className="item">File</div>
                    <div className="item">Edit</div>
                    <div className="item">Views</div>
                    <div className="item">Go</div>
                    <div className="item">Favourites</div>
                    <div className="item">Help</div>
                </div>
            }
            <div className="window-wrapper white">
                
                <ContentIcon name="Dreamweaver.exe" icon="dreamweaver" />
                <ContentIcon name="main.old.css" icon="file" />
                <ContentIcon name="php.ini" icon="ini" />

                { type === 'alert' &&
                    <>
                        <div className="window-content">
                            Are you sure you want to empty the recycle bin?
                        </div>
                        <div className="window-actions">
                            <button className="window-action-button">No</button>
                            <button className="window-action-button">Yes</button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Window