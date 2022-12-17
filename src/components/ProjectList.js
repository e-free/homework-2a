function ProjectList(props){
  const projects = props.projects;
  
  console.log("projects: ", projects);
 
//  const category = props.category; 
  let items = projects.map(function(item, index){
    return <>
        <div className="item">
          <img src={item['img']} alt=""/>
  
        </div>
      </>

    });
  return (
    <div className="portfolio">
      {items}
    </div>
  );
  }
    
export default ProjectList;