from PIL import Image, ImageOps
import sys

def make_collage():
    images = [
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Tech for Good/Venture Centre/Solar Panels/Solar panels.JPG",
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Livelihoods/Manndeshi/IMG_2535.JPG",
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Conservation/Sahyadri Sankalp Society/Great Hornbill feeding chick by Abhijeet Patil (1).jpg",
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Education/Aatmaja Foundation/Activities13.jpg",
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Conservation/HEAL/DSC_1364.JPG",
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Tech for Good/Venture Centre/CoE/H2COE from the side with cylinders.JPG",
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Education/Aatmaja Foundation/linkedin image3.jpg",
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Livelihoods/Manndeshi/agri tech 2.jpg",
        "/Users/poojarao/Desktop/raft-website/Project_Photos/Project Photos/Conservation/HEAL/DSC_1307.JPG"
    ]

    margin = 10
    total_w = 1200
    total_h = 1200
    
    col_w = (total_w - margin * 4) // 3
    
    h_tall = 550
    h_sq = col_w  # 386
    h_short = 224
    
    # Column 1: Tall, Square, Short
    # Column 2: Square, Short, Tall
    # Column 3: Short, Tall, Square
    
    boxes = [
        # Col 1
        (margin, margin, col_w, h_tall),
        (margin, margin*2 + h_tall, col_w, h_sq),
        (margin, margin*3 + h_tall + h_sq, col_w, h_short),
        # Col 2
        (margin*2 + col_w, margin, col_w, h_sq),
        (margin*2 + col_w, margin*2 + h_sq, col_w, h_short),
        (margin*2 + col_w, margin*3 + h_sq + h_short, col_w, h_tall),
        # Col 3
        (margin*3 + col_w*2, margin, col_w, h_short),
        (margin*3 + col_w*2, margin*2 + h_short, col_w, h_tall),
        (margin*3 + col_w*2, margin*3 + h_short + h_tall, col_w, h_sq)
    ]
    
    collage = Image.new('RGB', (total_w, total_h), color='white')
    
    try:
        for idx, img_path in enumerate(images):
            img = Image.open(img_path)
            x, y, w, h = boxes[idx]
            img_cropped = ImageOps.fit(img, (w, h), Image.Resampling.LANCZOS)
            collage.paste(img_cropped, (x, y))
            
        output_path = "/Users/poojarao/Desktop/raft-website/images/title_collage_masonry.jpg"
        collage.save(output_path, quality=95)
        print(f"Successfully saved masonry collage to {output_path}")
    except Exception as e:
        print(f"Error creating collage: {e}")
        sys.exit(1)

if __name__ == "__main__":
    make_collage()
