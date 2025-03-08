import { Input } from "@/components/ui/input"
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClearSearch: () => void
    inputClass?: string
}

function SearchInput({ value, onChange, onClearSearch, inputClass = '' }: Props) {
  return <div className="relative bg-white">
    <CiSearch className="absolute top-1/2 left-1 transform -translate-y-1/2" 
              size={22}/>
    <Input className={`${inputClass} px-8`}
           type="text" 
           value={value}
           onChange={onChange}
           placeholder="Search" />
    { value && <IoIosCloseCircleOutline size={22} 
        onClick={onClearSearch}
        className="absolute top-1/2 right-1 transform -translate-y-1/2"/> 
     }       
    
  </div>

}
export default SearchInput