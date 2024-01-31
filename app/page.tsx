// import Image from 'next/image'
import NewTodoForm from "@/components/NewTodoForm"

const getData = async () => {
  await new Promise((res) => setTimeout(() => res(), 2000))
  return { data: [1, 2, 3] }
}

const  Home = async () => {
  const data = await getData()
  console.log(data)
  return (
    <>
      <div>Home - LCD Soundsystem</div>
      <NewTodoForm onChange={() => console.log('oawivns;')} />
    </>
  ) 
  
}

export default Home