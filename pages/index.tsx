import toast from "../node_modules/react-hot-toast/dist/index"


export default function Home() {
  return (
    <main>
     <button  onClick={()=>toast.success('Hello Toast!')}>Toast Me</button>
    </main>
  )
}
