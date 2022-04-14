const ages = [18, 92, 56, 45, 78, 23, 96, 54];

const predicate = (age: number) => {
    return age > 90;
}
type CourseType ={
    title: string
    price: number
}

const oldAges = []// > 90

const courses = [
    {title: 'css', price: 110},
    {title: 'JS', price: 200},
    {title: 'css', price: 110},
]
//<160
const  chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

const  chipCourses =[
    {title: 'css', price: 110},
    {title: 'css', price: 110}
];
