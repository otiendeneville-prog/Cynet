import { link } from "fs";
import { Link } from "lucide-react";
import { Label } from "radix-ui";

type MenuLink= {
   label:string;
   to:string;
   hash ?:string;
}

function MegaMenu({ label,links}:{label:string:links:MenuLink[]}){
<div className="flex flex-col">
    <label className="font-bold mb-5">{label}</label>
     <Link 
       key={label.links}
       to={Link.to}
       hash={hash.link}
     >
     </Link>
</div>
}

