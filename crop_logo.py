from PIL import Image

def crop_logo():
    try:
        img_path = "/Users/poojarao/Desktop/raft-website/images/logo.png"
        img = Image.open(img_path)
        
        # Crop 2 pixels from all sides
        left = 2
        top = 2
        right = img.width - 2
        bottom = img.height - 2
        
        img_cropped = img.crop((left, top, right, bottom))
        
        output_path = "/Users/poojarao/Desktop/raft-website/images/logo_clean.png"
        img_cropped.save(output_path, quality=100)
        print(f"Successfully saved clean logo to {output_path}")
    except Exception as e:
        print(f"Error cropping logo: {e}")

if __name__ == "__main__":
    crop_logo()
