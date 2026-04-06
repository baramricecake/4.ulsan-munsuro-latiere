from PIL import Image
import numpy as np

def remove_background(input_path, output_path, tolerance=30):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # Get the background color from the top left pixel (assumed to be background)
    bg_color = data[0, 0, :3]
    
    # Calculate distance of all pixels from the background color
    distances = np.sqrt(np.sum((data[:, :, :3] - bg_color) ** 2, axis=2))
    
    # Create an alpha mask based on tolerance
    # Smooth transition (anti-aliasing) by scaling alpha
    alpha = np.where(distances < tolerance, 0, 
                     np.where(distances < tolerance + 20, (distances - tolerance) / 20 * 255, 255))
    
    data[:, :, 3] = alpha.astype(np.uint8)
    
    Image.fromarray(data).save(output_path)

remove_background("public/1. home/hero-text-raw.png", "public/1. home/hero-text-trans.png")
print("Background removal complete.")
