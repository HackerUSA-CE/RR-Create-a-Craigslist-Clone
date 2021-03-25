import Help from './Help'

const liStyle = {
    'display' : 'inline',
    'margin' : '2px',
    'padding' : '1px',
    'border' : '1px solid black'
}

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <h3>Listings</h3>
            <div>
                <ul>
                    <li style={liStyle}>all</li>
                    <li style={liStyle}>owner</li>
                    <li style={liStyle}>dealer</li>
                </ul>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu pretium erat. Maecenas in faucibus nibh, in ullamcorper sapien. Aenean ac tincidunt diam, ut rhoncus ex. Etiam ultricies tincidunt malesuada. Etiam et porta ipsum. Duis euismod ipsum lorem, et semper felis fermentum in. Nunc maximus cursus magna in semper. Nam posuere lacus rutrum semper dictum.</p>
            <Help />
        </div>
    )
}

export default Sidebar