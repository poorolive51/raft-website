from PIL import Image, ImageOps
import sys

def make_collage():
    images = [
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Education/Aatmaja Foundation/Activities13.jpg",
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Conservation/Sahyadri Sankalp Society/Great Hornbill feeding chick by Abhijeet Patil (1).jpg",
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Livelihoods/Manndeshi/IMG_2535.JPG",
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Tech for Good/Venture Centre/Solar Panels/Solar panels.JPG"
    ]

    target_size = 800  # Size of each square
    margin = 10        # White margin between images
    
    # 2x2 grid
    collage_width = target_size * 2 + margin * 3
    collage_height = target_size * 2 + margin * 3
    
    collage = Image.new('RGB', (collage_width, collage_height), color='white')
    
    positions = [
        (margin, margin),
        (target_size + margin * 2, margin),
        (margin, target_size + margin * 2),
        (target_size + margin * 2, target_size + margin * 2)
    ]
    
    try:
        for idx, img_path in enumerate(images):
            img = Image.open(img_path)
            # Center crop to target_size x target_size
            img_cropped = ImageOps.fit(img, (target_size, target_size), Image.Resampling.LANCZOS)
            collage.paste(img_cropped, positions[idx])
            
        output_path = "/Users/poojarao/Desktop/raft-website/images/title_collage.jpg"
        collage.save(output_path, quality=95)
        print(f"Successfully saved collage to {output_path}")
    except Exception as e:
        print(f"Error creating collage: {e}")
        sys.exit(1)

if __name__ == "__main__":
    make_collage()
