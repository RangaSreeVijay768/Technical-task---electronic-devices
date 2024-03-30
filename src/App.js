// App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes, useParams, useNavigate, Link} from 'react-router-dom';
import './App.css';
import DeviceDetails from "./pages/DeviceDetails";
import DeviceList from "./pages/DeviceList";
import MyOtherProjects from "./pages/MyOtherProjects";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [
                { name: "Mobile Phone", description: "A mobile phone (or cellphone) is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area, as opposed to a fixed-location phone (landline phone)." },
                { name: "Laptop", description: "A laptop is a personal computer that can be easily moved and used in a variety of locations. Most laptops are designed to have all of the functionality of a desktop computer, which means they can generally run the same software and open the same types of files." },
                { name: "Desktop", description: "Desktop refers to the main screen of the computer. It is the first screen you see after logging in. The desktop's appearance can vary widely because it is highly customizable, but generally desktops will feature a large image, icons, and a taskbar (covered later on this page). The Windows 10 desktop." },
                { name: "EarBuds", description: "Earphones or earbuds are a small type of headphones and audio devices that people wear in their outer ear. Earphones are lighter and more portable than headphones. They let people listen to music on a walkman, MP3 player, mobile phone or computer. Earphones." },
                { name: "SmartWatch", description: "Smartwatches are more than just timekeepers. In addition to showing you the time, they can help you keep track of the date, set alarms, and even function as a stopwatch. It's like having a mini time management assistant right on your wrist." },
                { name: "MacBook", description: "Mac runs your favorite apps.\n" +
                        "\n" +
                        "Microsoft 365, Adobe Creative Cloud, Zoom, and thousands of apps on the Mac App Store let you work, learn, play, create, and collaborate. Web apps like Google Docs work great on Safari, too. Every Mac also comes with Pages, Numbers, and Keynote — productivity software made for macOS." },
            ]
        };
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<DeviceList devices={this.state.devices} />} />
                        <Route path="/device/:id" element={<DeviceDetails devices={this.state.devices} />} />
                        <Route path="/myProjects" element={<MyOtherProjects/>} />
                    </Routes>
                </div>
            </Router>
        );
    }
}



export default App;
