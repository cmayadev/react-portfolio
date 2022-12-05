import ContentIcon from './ContentIcon';

import './Window.scss';

const Window = (props) => {

    const { title, type } = props;

    return ( 
        <div className="window">
            <div className="window-toolbar">   
                <div class="window-title">{title}</div>   
                <div class="window-buttons">
                    <div class="window-button window-close"></div>
                    { type !== 'alert' && <div class="window-button window-minimize"></div> }
                </div>        
            </div>
            { type !== 'alert' &&
                <div class="options line">
                    <div class="item">File</div>
                    <div class="item">Edit</div>
                    <div class="item">Views</div>
                    <div class="item">Go</div>
                    <div class="item">Favourites</div>
                    <div class="item">Help</div>
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
                            <button class="window-action-button">No</button>
                            <button class="window-action-button">Yes</button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Window