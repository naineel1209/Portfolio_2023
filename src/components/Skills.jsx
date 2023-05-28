import Tilt from 'react-parallax-tilt';

const Skills = () => {
    const skillsList = [
        {
            name: 'HTML',
            icon: 'https://img.icons8.com/color/96/000000/html-5--v1.png',
        },
        {
            name: 'CSS',
            icon: 'https://img.icons8.com/color/96/000000/css3.png',
        },
        {
            name: 'JavaScript',
            icon: 'https://img.icons8.com/color/96/000000/javascript--v1.png',
        },
        {
            name: 'ReactJS',
            icon: 'https://img.icons8.com/color/96/000000/react-native.png',
        },
        {
            name: 'NodeJS',
            icon: 'https://img.icons8.com/color/96/000000/nodejs.png',
        },
        {
            name: 'ExpressJS',
            icon: 'https://img.icons8.com/color/96/000000/express.png',
        },
        {
            name: 'MongoDB',
            icon: 'https://img.icons8.com/color/96/000000/mongodb.png',
        },
        {
            name: 'MySQL',
            icon: 'https://img.icons8.com/color/96/000000/mysql-logo.png',

        },
        {
            name: 'Git',
            icon: 'https://img.icons8.com/color/96/000000/git.png',
        },
        {
            name: 'GitHub',
            icon: 'https://img.icons8.com/color/96/000000/github--v1.png',
        },
        {
            name: 'Bootstrap',
            icon: 'https://img.icons8.com/color/96/000000/bootstrap.png',
        },
        {
            name: 'Java',
            icon: 'https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png',

        }
    ];

    return (
        <div name="skills" className='bg-gradient-to-b from-gray-800 to-black'>
            <div className=' text-white mx-5 md:mx-20 p-10 h-full'>
                <p className='inline-block text-3xl font-bold border-b-4 border-gray-500'>Skills</p>

                <p className="mt-10">These are the technologies i have worked with: </p>

                <div className='mt-10 w-full h-full grid gap-10 md:gap-20 place-items-center  grid-cols-3 md:grid-cols-5 mx-1 text-gray-500 text-justify'>
                    {
                        skillsList.map((skill, index) => {
                            return (
                                <Tilt key={index} className='w-full h-full shadow-md shadow-slate-200/40 p-5 hover:border-4 hover:border-gray-500 rounded-lg duration-200 flex flex-col justify-center items-center gap-2 hover:bg-white group'>
                                    <img src={skill.icon} />
                                    <p className='duration-200 group-hover:text-black'>{skill.name}</p>
                                </Tilt>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills