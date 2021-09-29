import React from 'react'
// import "./item.css"

function Item(props) {
    function setFileIcon(type, ext) {
        if (type === "folder") {
            return <i className="far fa-folder fa-4x"></i>
        } else {
            switch (ext) {
                case "txt":
                    return <i className="far fa-file-alt fa-4x"></i>;
                case "jpg":
                    return <i class="far fa-file-image fa-4x"></i>;
                case "jpeg":
                    return <i class="far fa-file-image fa-4x"></i>;
                case "mp3":
                    return <i class="far fa-file-audio fa-4x" ></i>;
                case "mp4":
                    return <i class="far fa-file-video fa-4x"></i>;
                case "pdf":
                    return <i class="far fa-file-pdf fa-4x"></i>;
                default:
                    return <i class="far fa-file fa-4x"></i>
            }
        }//onClick={() => handleDelete(url._id)}
    }
    const { name, type, ext } = props.item
    return (

        <div className="col-lg-3" >
            <div class="card border-primary mb-3" style={{ maxWidth: "10rem" },{height:"200px"}}>
                <div class="card-header">{name}</div>
                <div class="card-body text-primary">
                    <div className="item">
                        <div className="item-icon">{setFileIcon(type, ext)}</div>
                        <div className="item-text">{name}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Item
