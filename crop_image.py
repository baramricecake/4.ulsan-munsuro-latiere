from PIL import Image
import numpy as np

def crop_white_borders(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    data = np.array(img)
    
    # Check pixels on the left side. White is roughly [255, 255, 255] or close to it.
    # We will find the first column where there's non-white/gray content.
    # Let's crop the first ~80 pixels which seem to be the gray/white bar.
    # To be safe, let's just crop 2% off the left if it's solid, or calculate bounding box.
    
    # Let's define "background" as the color of the very top-left pixel.
    bg_color = data[0, 0, :3]
    tolerance = 20
    
    # Calculate distance of all pixels from the bg_color
    diff = np.sqrt(np.sum((data[:, :, :3] - bg_color) ** 2, axis=2))
    
    # Find columns that have any pixel significantly different from bg_color
    mask = diff > tolerance
    
    # Find the first column (from left) that has content
    valid_cols = np.where(mask.any(axis=0))[0]
    
    if len(valid_cols) > 0:
        first_col = valid_cols[0]
        # Crop the image from first_col to the end
        cropped_data = data[:, first_col:, :]
        Image.fromarray(cropped_data).save(output_path)
        print(f"Cropped {first_col} pixels from the left.")
    else:
        print("No content found or crop failed.")

crop_white_borders("public/1. home/hero_landscape.png", "public/1. home/hero_landscape.png")
