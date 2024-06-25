import { auth } from "@/auth"
import { Avatar, Button } from "@nextui-org/react"



export default async function Dashboard() {

    const session = await auth()

    const hiresEx = [
        {
            name: 'Tutor1',
            price: 69.69,
            email: 'syu859123@gmail.com',
            id: '1'
        }, 
        {
            name: 'Tutor2',
            price: 69.69,
            email: 'syu85903@gmail.com',
            id:'2',
        },
        {
            name: 'Tutor2',
            price: 69.69,
            email: 'syu852324@gmail.com',
            id: '3',
        }
    ]

    return (
        <div className="flex w-full p-10 flex-col">
            {
                session && session.user ? 
            <div className="flex gap-4 w-full">
               
                <div>
                    {session.user.image ? 
                    <Avatar size="lg" src={session.user.image}></Avatar> :
                    <Avatar name={session.user.name!}></Avatar>
                    }
                    
                </div>
                <div>
                    <span>
                        <h1 className="text-lg font-semibold">
                            {session.user.name?.toUpperCase()}
                        </h1>
                    </span>
                </div>
                
           </div>
           : null
            }
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]">
                {
                    hiresEx.map((node:any) => {
                        return (
                            <div key={node.id} className="grid  items-center">
                                <span>
                                    {node.name}
                                </span>
                                <span>
                                    {node.price}
                                </span>
                                <span>
                                <Button>
                                    Hire
                                </Button>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
          
        </div>
    )
}