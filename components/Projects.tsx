import ProjectCard from "./ProjectCard";
import ProjectCardAlt from "./ProjectCardAlt";

export default function Projects(){
    return(
        <div className="px-5 xl:px-20 grid grid-cols-1 lg:grid-cols-2 justify-items-center pt-20 bg-primary-content gap-10">
            <ProjectCardAlt name="ChatYHB - AI Chat Bot" description="ChatYHB utilizes Google's AI SDK. Users can send text-based prompts to ChatYHB, which uses Google Gemini 1.5 in the backend to provide a response. The response is well-formated, enhancing user experience. Users can see their previous prompts and responses. Additionally, users can delete all previous prompts and responses, if needed." image="/chatyhb.jpg" github="https://github.com/yhbarve/chatyhb" live="https://chatyhb.vercel.app/" tech={["React.js", "Javascript", "TailwindCSS", "Express", "NodeJS", "MongoDB", "Google AI SDK", "npm"]} />

            <ProjectCardAlt name="Functional Clone of Medium.com" description="The project is inspired by the popular blogging platform Medium.com, offering users a similar experience with key features tailored to their needs. Users can seamlessly add, update, and delete their blogs, empowering them with full control over their content. The authentication system enables secure login, logout, and updating of user information, ensuring a personalized experience for each user." image="/medium-icon-1.jpeg" github="https://github.com/waibee-11/100xDevs/tree/main/medium-blog" live="https://medium-yb.vercel.app/" tech={["React.js", "Typescript", "TailwindCSS", "Hono", "Cloudflare Workers", "Postgre SQL", "Prisma", "npm"]} />
            
            <ProjectCardAlt name="ScriptSync" description="ScriptSync is an innovative application designed to streamline the process of adding captions to videos. Users can upload their videos, and ScriptSync automatically generates transcriptions, which can then be edited for accuracy and timing. With customizable options including font size, text color, and outline color, users can tailor the appearance of their captions to suit their preferences. Once edited, these transcriptions seamlessly integrate into the video, enhancing accessibility and engagement. Additionally, users have the option to download the finalized video for sharing across various platforms." image="/scriptsync.ico" github="" live="https://youtu.be/FPEUKRfoRFQ" tech={["Next.js", "Typescript", "TailwindCSS", "AWS S3", "AWS Transcribe", "Web Assembly", "ffmpeg"]} warning="Because of AWS policies, I am currently not able to push my code to GitHub. I am trying my best to solve the issue." />

            <ProjectCardAlt name="Weather Forecast App" description="A weather application that delivers not only the current weather conditions but also forecasts for the upcoming days, all presented in an exquisite interface. The App also allows users to search for any desired city. The app has a simple yet captivating design making it easy for users to look up the weather." image="/evrab-weather-icon-1.jpeg" github="https://github.com/waibee-11/Weather-App/tree/main" live='/weather' tech={["HTML", "CSS", "Javascript", "API"]} />

            {/* https://main--weather-app-waibee.netlify.app/# */}

            <ProjectCardAlt name="News Headlines App" description="This app uses TheNewsAPI and provides the top 9 news headlines in various categories. It features a sleek interface with easy navigation. The app also supports dark mode. Due to restrictions on the free tier of API used, only 9 headlines can be displayed. Additionally, there is a search functionality which is again not supported by the free tier of the API." image="/news-app-icon-1.jpeg" github="https://github.com/waibee-11/Evrab-News/tree/main" live="https://main--evrab-news.netlify.app/" tech={["HTML", "CSS", "Javascript", "API"]} />

            <ProjectCardAlt name="MNIST Digit Recognizer" description="This Google Colab notebook accepts an image of a handwritten digit (0-9) and recogizes it with 95% accuracy. This project has several applications in the real-world. For example, it can be used in banks and post offices to recognize numbers on forms. With more training data and better parameter tuning, the accuracy can be increased to around 99%. I am currently working on building a UI and publishing it as a web app." image="/MNIST-logo.jpeg" github="https://github.com/waibee-11/MNIST-ML-Project" live="https://colab.research.google.com/drive/19SYI5mLiLKLGBfqJYJlG05HTFvRYO2QQ?usp=sharing" tech={["Maching Learning", "Neural Networks", "Python", "pandas", "numpy", "tensorflow", "keras", "cv2", "Convulated Neural Networks"]} />

            <ProjectCardAlt name="Movie Recommender" description="Can't decide which movie to watch? This interesting project solves the problem. All you have to do is enter the name of your favourite movie. The machine learning algorithm creates a feature vector for the film and compares it with all the movies in the database. After a few seconds, it shows you the 10 closest matches. The data is fetched from TMDb API. I am currently working on building a UI and publishing it as a web app." image="/movie-icon.jpeg" github="https://github.com/waibee-11/MovieRecommender_ML_Project/tree/main" live="https://colab.research.google.com/drive/1M2HrE7dRnJhrQRM7Qn8uJ-1gzREvxCPg" tech={["Maching Learning", "Python", "pandas", "numpy", "difflib", "sklearn", "Vectorization", "Cosine similarity"]} />

            <ProjectCardAlt name="CSS Based Amazon.com Clone" description="As the name says, this is a CSS based clone of the Amazon Shopping home page. This project uses vanilla CSS. I made this project to challenge myself to use all my CSS knowledge and create a carbon copy of an existing webpage. Please note that this clone is not responsive and is intended to be viewed on a laptop." image="/amazon-icon.jpeg" github="https://github.com/waibee-11/Amazon_Clone" live="https://main--yash-amazon.netlify.app/" tech={["HTML", "CSS", "CSS Flexbox", "CSS Grid"]} />
        </div>
    )
}