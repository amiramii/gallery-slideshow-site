export class Navigation{
    constructor(imageName){
        this.gallery=[
            {
                before:false,
                Name:"starry-night",
                next:true,
            },
            {
                before:true,
                Name:"the-storm-on-the-sea-of-galilee",
                next:true,
            },
            {
                before:true,
                Name:"lady-with-an-ermine",
                next:true,
            },
            {
                before:true,
                Name:"the-boy-in-the-red-vest",
                next:true,
            },
            {
                before:true,
                Name:"girl-with-pearl-earring",
                next:true,
            },
            {
                before:true,
                Name:"the-great-wave-off-kanagawa",
                next:true,
            },
            {
                before:true,
                Name:"the-night-cafe",
                next:true,
            },
            {
                before:true,
                Name:"arnolfini-portrait",
                next:true,
            },
            {
                before:true,
                Name:"guernica",
                next:true,
            },
            {
                before:true,
                Name:"van-gogh-self-portrait",
                next:true,
            },
            {
                before:true,
                Name:"mona-lisa",
                next:true,
            },
            {
                before:true,
                Name:"penitent-magdalene",
                next:true,
            },
            {
                before:true,
                Name:"the-sleeping-gypsy",
                next:true,
            },
            {
                before:true,
                Name:"the-basket-of-apples",
                next:true,
            },
            {
                before:true,
                Name:"the-swing",
                next:false,
            }];
        this.imageName=imageName;
    }
    findImage(){
        const imageIndex=this.gallery.findIndex((item)=>item.Name===this.imageName);
        return {
            canGo:this.gallery[imageIndex],
            imageIndex,

        }
    }
    showNext(){
        let res=this.findImage();
        if(res.canGo.next===true){
            window.location.href=`./${this.gallery[((res.imageIndex)+1)].Name}.html`;
            return true;
        }
        return false;
    }
    showPrevious(){
        let res=this.findImage();
        if(res.canGo.before===true){
            window.location.href=`./${this.gallery[((res.imageIndex)-1)].Name}.html`;
            return true;
        }
        return false;
    }
    progressBar(borderElement){
        let res=this.findImage().imageIndex;
        const progressPercent=((res+1)/this.gallery.length)*100;
        borderElement.style.width=`${progressPercent}%`;

    }
}
export  function showModal(modal){
    modal.classList.remove('invisible');
  };
export  function hideModal(modal){
    modal.classList.add('invisible');
  };