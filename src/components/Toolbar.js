

function Toolbar(props){
 // console.log("props: ", props);  
  const filters = props.filters;
  const onSelectFilter = props.onSelectFilter;
  const btnDefaultClasses = "btn btn-light mx-1";
  const btnActiveClasses = "btn btn-light mx-1 active";
 // console.log("onSelectFilter: ", onSelectFilter);
  let isActive = props.selected;
  


  const res = filters.map(function(item, index){
    return <button 
      key={`btn-key-${index}`}
      onClick={() => onSelectFilter(item)}    
      className={item === isActive ? btnActiveClasses : btnDefaultClasses} 
      >
      {item} 
    </button>
    
  }); 
  
return (
  <div className="text-center toolbar">{res}</div>
)
}

export default Toolbar;

