**Report: Webpage for Robot Control and Information**

**1. Introduction**
The purpose of this report is to provide an overview and evaluation of the webpage developed for controlling and obtaining information about a robot. The webpage serves as an interface to interact with the robot and is designed for the target audience of professors.

**2. Webpage Overview**
The webpage utilizes React.js as the frontend framework and communicates with a backend server. It provides the following key features and functionality:

a. Maze Display: The webpage renders a maze grid, allowing the visualization of the robot's movement and position.

b. Control Buttons: Interactive control buttons are implemented to send commands to the robot. These buttons enable actions such as starting, stopping, or changing the robot's behavior.

c. Data Display: The webpage retrieves and displays relevant data about the robot's performance. This information includes metrics such as speed, distance traveled, and other customizable parameters.

d. Image Display: The webpage fetches and displays images captured by the robot in real-time. This feature provides visual feedback to the user and enhances the overall user experience.

e. Data Table: A data table presents tabulated information about the robot's activities and performance. This table is dynamically updated as new data becomes available.

f. Progress Bar: A progress bar visualizes the progress or completion of specific tasks or actions performed by the robot.

g. Replay Functionality: The webpage offers the ability to replay previous robot movements by retrieving and displaying a replay map.

**3. Technical Implementation**
The webpage's frontend is built using React.js, a popular JavaScript library for building user interfaces. The main code file, `App.js`, orchestrates the different components and implements the necessary API calls to interact with the backend server.

a. Data Retrieval: The webpage fetches data from the backend server using the `fetch` API. It retrieves maze data, display data, and replay map data. These API calls are made asynchronously, ensuring a seamless user experience.

b. Real-time Updates: The webpage leverages the `ReactPolling` library to perform periodic polling for updated data. This approach ensures that the displayed information remains up-to-date by fetching new data at regular intervals.

c. User Interaction: The webpage allows users to interact with the robot through control buttons. These buttons trigger specific actions, such as randomizing the maze or initiating robot movements. The user's commands are sent to the backend server for processing.

**4. Design and User Experience**
The webpage features a clean and intuitive design, prioritizing ease of use and clarity. The layout ensures that essential elements, such as the maze display, control buttons, and data table, are easily accessible and clearly visible.

a. Responsive Design: The webpage is designed to be responsive, adapting to different screen sizes and devices. This feature ensures optimal user experience across various platforms, including desktop and mobile devices.

b. Visual Feedback: The inclusion of visual elements, such as the maze display, image display, and progress bar, provides users with real-time feedback about the robot's activities and progress. This visual feedback enhances the user's understanding and engagement with the robot's behavior.

**5. Conclusion**
In conclusion, the webpage developed for controlling and obtaining information about the robot successfully achieves its intended purpose. It provides a user-friendly interface for professors to interact with the robot and retrieve relevant data. The combination of interactive control buttons, real-time data updates, and visual feedback enhances the overall user experience. The clean design and responsive layout contribute to the webpage's usability across

.
