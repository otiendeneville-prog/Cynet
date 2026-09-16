import { Link } from "lucide-react";
import {useState} from "react"

type MenuLink= {
   label:string;
   to:string;
   harsh ?:string;
}

function MegaMenu({lable,links}:{label:string:links:MenuLink[]}){
<div className="flex flex-col">
     <Link 
       key={lable.links}
       to={Link.to}
     
     >
         
     
     </Link>
</div>
}

